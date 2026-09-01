let cachedBaileys;

async function loadBaileys() {
  if (!cachedBaileys) {
    const baileysModule = await import("baileys");

    cachedBaileys = {
      makeWASocket: baileysModule.default,
      DisconnectReason: baileysModule.DisconnectReason,
      delay: baileysModule.delay,
      useMultiFileAuthState: baileysModule.useMultiFileAuthState,
      fetchLatestBaileysVersion: baileysModule.fetchLatestBaileysVersion,
      makeCacheableSignalKeyStore: baileysModule.makeCacheableSignalKeyStore,
      makeInMemoryStore: baileysModule.makeInMemoryStore,
      proto: baileysModule.proto,
      jidNormalizedUser: baileysModule.jidNormalizedUser,
      WAMessageStubType: baileysModule.WAMessageStubType,
      generateWAMessageFromContent: baileysModule.generateWAMessageFromContent,
      getBinaryNodeChild: baileysModule.getBinaryNodeChild,
      getBinaryNodeChildren: baileysModule.getBinaryNodeChildren,
      areJidsSameUser: baileysModule.areJidsSameUser,
      downloadContentFromMessage: baileysModule.downloadContentFromMessage,
      generateWAMessageContent: baileysModule.generateWAMessageContent,
      jidDecode: baileysModule.jidDecode,
      prepareWAMessageMedia: baileysModule.prepareWAMessageMedia,
      WA_DEFAULT_EPHEMERAL: baileysModule.WA_DEFAULT_EPHEMERAL,
      isJidGroup: baileysModule.isJidGroup,
      isJidUser: (jid) =>
        !!jid && (jid.endsWith("@s.whatsapp.net") || jid.endsWith("@lid")),
      isJidBroadcast: baileysModule.isJidBroadcast,
      normalizeMessageContent: baileysModule.normalizeMessageContent,
      downloadMediaMessage: baileysModule.downloadMediaMessage,
      BufferJSON: baileysModule.BufferJSON,
      initAuthCreds: baileysModule.initAuthCreds,
      WAProto: baileysModule.WAProto,
      getUrlInfo: baileysModule.getUrlInfo,
      extractUrlFromText: baileysModule.extractUrlFromText,
      getContentType: baileysModule.getContentType,
      getBinaryNodeChildString: baileysModule.getBinaryNodeChildString,
      getKeyAuthor: baileysModule.getKeyAuthor,
      decryptPollVote: baileysModule.decryptPollVote,
      getAggregateVotesInPollMessage:
        baileysModule.getAggregateVotesInPollMessage,
    };
  }

  return cachedBaileys;
}

module.exports = {
  loadBaileys,
};
