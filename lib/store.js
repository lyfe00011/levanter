const groupMetadataCache = Object.create(null);

async function fetchGroupMetadata(client, groupId) {
  if (
    groupId in groupMetadataCache &&
    Array.isArray(groupMetadataCache[groupId]?.participants)
  ) {
    return groupMetadataCache[groupId];
  }

  const metadata = await client.groupMetadata(groupId);
  if (metadata) {
    groupMetadataCache[groupId] = metadata;
  }

  return groupMetadataCache[groupId];
}

function bind(client) {
  client.ev.on("groups.update", async (updates = []) => {
    for (const update of updates) {
      const current = await fetchGroupMetadata(client, update.id);
      if (current) {
        Object.assign(current, update);
      }
    }
  });

  client.ev.on(
    "group-participants.update",
    async ({ id, participants = [], action }) => {
      if (action === "remove" && participants.includes(client.user?.jid)) {
        delete groupMetadataCache[id];
        return;
      }

      const current = await fetchGroupMetadata(client, id);
      if (!current) {
        return;
      }

      switch (action) {
        case "add":
          current.participants = [
            ...(current.participants || []),
            ...participants.map((participant) => ({
              id: participant,
              admin: null,
            })),
          ];
          break;
        case "demote":
        case "promote":
          for (const member of current.participants || []) {
            if (participants.includes(member.id)) {
              member.admin = action === "promote" ? "admin" : null;
            }
          }
          break;
        case "remove":
          current.participants = (current.participants || []).filter(
            (member) => !participants.includes(member.id),
          );
          break;
        default:
          break;
      }

      current.size = (current.participants || []).length;
    },
  );

  return {
    groupMetadata: groupMetadataCache,
    fetchGroupMetadata: (groupId) => fetchGroupMetadata(client, groupId),
    sync: false,
  };
}

module.exports = { bind };
