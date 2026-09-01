const { Op } = require("sequelize");
const { loadBaileys } = require("./baileys");
const config = require("./config");
const { getBuffer } = require("./fetch");
const {
  setKeys,
  getCreds,
  setCreds,
  KeysDB,
  CredsDB,
} = require("./db/session");
const appConfig = require("../config");
const { lang } = require(".");

function extractFirstUrl(value = "null") {
  const matches = value.match(
    /(http|https):\/\/([\w-]+\.)+[\w-]+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/g,
  );

  return matches && matches[0];
}

async function initAuthSys(authUrl, logger, sessionKey) {
  const { BufferJSON, initAuthCreds, WAProto } = await loadBaileys();

  if (!sessionKey) {
    throw new Error("Missing session");
  }

  let credentials;
  let isNew = false;

  const existingCreds = await getCreds(sessionKey);

  if (!existingCreds) {
    logger.info(lang.extra.init_session.format(sessionKey));
  }

  if (existingCreds || config[sessionKey].env.SESSION_ID || !appConfig.VPS) {
    if (!existingCreds && config[sessionKey].env.SESSION_ID) {
      logger.info(lang.extra.load_session.format(sessionKey));
      let buffer = false;
      let rawSession = "";

      try {
        const result = await getBuffer(authUrl, false);
        if (result.buffer) {
          buffer = result.buffer;
        } else {
          rawSession = result;
        }
      } catch (error) {
        logger.error("Failed to get session: " + error.message);
      }

      if (!buffer) {
        rawSession = JSON.stringify(rawSession);
        const sessionUrl = extractFirstUrl(rawSession);
        const failedState = { state: false };

        rawSession = rawSession.replace(
          sessionUrl,
          config[sessionKey].env.SESSION_ID,
        );
        logger.error(
          lang.extra.invalid_session.format(
            sessionKey,
            config[sessionKey].env.SESSION_ID,
          ),
        );
        return failedState;
      }

      isNew = true;
      const raw = buffer.toString();
      const parsed = JSON.parse(raw, BufferJSON.reviver);
      const invalidState = { state: false };

      if (!parsed.creds || !parsed.keys) {
        logger.error(
          lang.extra.invalid_session.format(sessionKey, "CORRUPT DATA"),
        );
        return invalidState;
      }

      credentials = parsed.creds;
      const keys = parsed.keys;

      for (const keyType in keys) {
        for (const keyId in keys[keyType]) {
          await setKeys(keyType, keyId, keys[keyType][keyId], sessionKey);
        }
      }

      await setCreds(credentials, sessionKey);
      logger.info(lang.extra.success_session.format(sessionKey));
    } else {
      const missingState = { state: false };

      if (!existingCreds) {
        return missingState;
      }

      credentials = existingCreds;
    }
  } else {
    logger.info("Generating Qr...");
    credentials = initAuthCreds();
  }

  return {
    state: {
      creds: credentials,
      keys: {
        get: async (keyType, keyIds) => {
          const result = {};
          const rows = await KeysDB.findAll({
            where: {
              session: sessionKey,
              type: {
                [Op.in]: keyIds.map((keyId) => "" + keyType + keyId),
              },
            },
          });

          for (const row of rows) {
            const keyId = row.type.replace(keyType, "");

            try {
              let value = JSON.parse(row.value, BufferJSON.reviver);

              if (keyType === "app-state-sync-key" && value) {
                value = WAProto.Message.AppStateSyncKeyData.fromObject(value);
              }

              result[keyId] = value;
            } catch (error) {
              logger.error(
                "Error parsing key " + keyType + ": " + error.message,
              );
            }
          }

          return result;
        },
        set: async (keyMap) => {
          const createList = [];
          const deleteList = [];

          for (const parentKey in keyMap) {
            for (const childKey in keyMap[parentKey]) {
              const value = keyMap[parentKey][childKey];
              const fullKey = "" + parentKey + childKey;

              if (value) {
                createList.push({
                  type: fullKey,
                  session: sessionKey,
                  value: JSON.stringify(value, BufferJSON.replacer),
                });
              } else {
                deleteList.push(fullKey);
              }
            }
          }

          const tasks = [];
          const bulkOptions = { updateOnDuplicate: ["value"] };

          if (createList.length) {
            tasks.push(KeysDB.bulkCreate(createList, bulkOptions));
          }

          if (deleteList.length) {
            tasks.push(
              KeysDB.destroy({
                where: {
                  session: sessionKey,
                  type: {
                    [Op.in]: deleteList,
                  },
                },
              }),
            );
          }

          await Promise.all(tasks);
        },
      },
    },
    saveState: () => setCreds(credentials, sessionKey),
    isNew,
  };
}

exports.initAuthSys = initAuthSys;
