const { loadBaileys: ai } = require('./baileys');
let aj;
let ak;
let al;
let am;
let an;
let ao;
const ap = {
  stdTTL: 3600,
  useClones: false,
};
const { NodeCache: aq } = require('@cacheable/node-cache');
const { genThumbnail: ar, extractVideoThumb: as, chats: at, TEMP_DIR: au } = require('./constant');
const { join: av } = require('path');
const aw = require('./config');
const ax = new aq(ap);
const ay = require('./utils');
const az = require('../config');
const aA = async (A, B, C) => {
  if (!an(A) || !B) {
    return '0';
  }
  const E = await aw[B].fetchGroupMetadata(A, false, C);
  return E?.ephemeralDuration;
};
const aB = async (F, G) => {
  if (!aj) {
    const J = await ai();
    aj = J.WAProto;
    ak = J.generateWAMessageFromContent;
    al = J.prepareWAMessageMedia;
    am = J.extractUrlFromText;
    an = J.isJidGroup;
    ao = J.getUrlInfo;
  }
  G.linkPreview && delete G.linkPreview;
  let I = {};
  if ('text' in F) {
    const K = 'string' == typeof F.text ? am(F.text) : void 0;
    const L = {
      ...F,
    };
    let M = G?.LinkPreview || ax.get(K);
    if (!M && K && !ax.has(K)) {
      try {
        const O = {
          uploadImage: G.upload,
        };
        M = await ao(K, O);
      } catch (P) {
        ax.set(K, null);
      }
    }
    if (M && M.title) {
      L.canonicalUrl = M['canonical-url'];
      L.matchedText = M['matched-text'];
      L.jpegThumbnail = M.jpegThumbnail;
      L.description = M.description;
      L.title = M.title;
      L.previewType = 0;
      const S = M.highQualityThumbnail;
      S &&
        ((L.thumbnailDirectPath = S.directPath),
        (L.mediaKey = S.mediaKey),
        (L.mediaKeyTimestamp = S.mediaKeyTimestamp),
        (L.thumbnailWidth = S.width),
        (L.thumbnailHeight = S.height),
        (L.thumbnailSha256 = S.fileSha256),
        (L.thumbnailEncSha256 = S.fileEncSha256));
    }
    I.extendedTextMessage = L;
  } else {
    if ('contacts' in F) {
      const T = F.contacts.contacts.length;
      if (!T) {
        throw new Error('require atleast 1 contact');
      }
      if (1 === T) {
        I.contactMessage = aj.Message.ContactMessage.create(F.contacts.contacts[0]);
      } else {
        I.contactsArrayMessage = aj.Message.ContactsArrayMessage.create(F.contacts);
      }
    } else {
      if ('location' in F) {
        I.locationMessage = aj.Message.LocationMessage.create(F.location);
      } else {
        if ('button' in F) {
          const V = F.button;
          Object.assign(V, I);
          I = {
            buttonsMessage: V,
          };
        } else {
          if ('react' in F) {
            F.react.senderTimestampMs = Date.now();
            I.reactionMessage = aj.Message.ReactionMessage.create(F.react);
          } else {
            if ('list' in F) {
              const X = {
                listMessage: F.list,
              };
              I = X;
            } else {
              if ('template' in F) {
                const Y = {
                  hydratedTemplate: F.template,
                };
                const Z = {
                  templateMessage: Y,
                };
                I = Z;
              } else {
                if ('invite' in F) {
                  I = {
                    groupInviteMessage: aj.Message.GroupInviteMessage.create(F.invite),
                  };
                } else {
                  if ('delete' in F) {
                    I.protocolMessage = {
                      key: F.delete,
                      type: 0,
                    };
                  } else {
                    if ('edit' in F) {
                      I = {
                        protocolMessage: {
                          key: F.edit.key,
                          type: 14,
                          editedMessage: F.edit.message
                            ? F.edit.message
                            : {
                                conversation: F.edit.text,
                              },
                        },
                      };
                    } else {
                      if ('image' in F) {
                        F.jpegThumbnail = await ar(F.image);
                      } else {
                        if ('video' in F) {
                          const { thumbnail: a2, duration: a3 } = await as(F.video);
                          F.jpegThumbnail = a2;
                          F.seconds = a3;
                        }
                      }
                      const a1 = {
                        ...F,
                        ...G,
                      };
                      I = await al(a1, G);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  'viewOnce' in G &&
    (I = {
      viewOnceMessage: {
        message: I,
      },
    });
  if ('contextInfo' in G) {
    const [a5] = Object.keys(I);
    I[a5].contextInfo =
      {
        ...I[a5]?.contextInfo,
        ...G.contextInfo,
      } || {};
  }
  return I;
};
const aC = async (A, B, C) => {
  if (!A) {
    return;
  }
  let E = ay.expiration.get(A);
  if (void 0 === E && an(A)) {
    const F = await aA(A, B, C);
    ay.expiration.set(A, F);
    return F;
  }
  return E;
};
exports.prepareMessage = async (E, F, G = {}, H) => {
  G._trace &&
    G._trace.push({
      step: 'prepare_msg_start',
      time: Date.now(),
      type: 'text' in F ? 'text' : Object.keys(F)[0],
    });
  if (!aj) {
    G._trace &&
      G._trace.push({
        step: 'load_baileys_start',
        time: Date.now(),
      });
    const O = await ai();
    aj = O.WAProto;
    ak = O.generateWAMessageFromContent;
    al = O.prepareWAMessageMedia;
    am = O.extractUrlFromText;
    an = O.isJidGroup;
    ao = O.getUrlInfo;
    G._trace &&
      G._trace.push({
        step: 'load_baileys_end',
        time: Date.now(),
      });
  }
  G.linkPreview && delete G.linkPreview;
  if (!(F.contacts || F.react || F.invite || F.delete || F.edit)) {
    if ('text' in F && !G.linkPreview) {
      const Q = 'string' == typeof F.text ? am(F.text) : void 0;
      if (Q) {
        let R = ax.get(Q);
        if (!R && !ax.has(Q)) {
          G._trace &&
            G._trace.push({
              step: 'link_preview_fetch_start',
              time: Date.now(),
              url: Q,
            });
          try {
            const T = new Promise((V, W) =>
              setTimeout(() => W(new Error('Link preview timeout')), 15000),
            );
            const U = {
              uploadImage: H.waUploadToServer,
            };
            R = await Promise.race([ao(Q, U), T]);
            R &&
              (G._trace &&
                G._trace.push({
                  step: 'link_preview_fetch_success',
                  time: Date.now(),
                }),
              ax.set(Q, R));
          } catch (V) {
            G._trace &&
              G._trace.push({
                step: 'link_preview_fetch_error',
                time: Date.now(),
                error: V.message,
              });
            ax.set(Q, null);
          }
        }
        F.linkPreview = R;
      }
    }
    'poll' in F &&
      ((F.poll.selectableCount = F.poll.selectableOptionsCount),
      (F.poll.values = F.poll.options.map(({ optionName: X }) => X)));
    F.mentions = (!!G.contextInfo && G.contextInfo.mentionedJid) || [];
    F.caption = (!!G.caption && G.caption) || void 0;
    F.gifPlayback = (!!G.gifPlayback && G.gifPlayback) || void 0;
    G.ephemeralExpiration ||
      (G._trace &&
        G._trace.push({
          step: 'fetch_expiration_start',
          time: Date.now(),
        }),
      (G.ephemeralExpiration = await aC(E, H.levanterId, G._trace)),
      G._trace &&
        G._trace.push({
          step: 'fetch_expiration_end',
          time: Date.now(),
        }));
    if ('image' in F) {
      G._trace &&
        G._trace.push({
          step: 'process_image_start',
          time: Date.now(),
        });
      const Y = F.image.stream ? av(au, G.fileName) : F.image;
      (Buffer.isBuffer(Y) || 'string' == typeof Y) && (F.jpegThumbnail = await ar(Y));
      G._trace &&
        G._trace.push({
          step: 'process_image_end',
          time: Date.now(),
        });
    } else {
      if ('video' in F) {
        G._trace &&
          G._trace.push({
            step: 'process_video_start',
            time: Date.now(),
          });
        const Z = F.video.stream ? av(au, G.fileName) : F.video;
        if (Buffer.isBuffer(Z) || 'string' == typeof Z) {
          const { thumbnail: a1, duration: a2 } = await as(Z);
          F.jpegThumbnail = a1;
          F.seconds = a2;
        }
        G._trace &&
          G._trace.push({
            step: 'process_video_end',
            time: Date.now(),
          });
      }
    }
    G.getUrlInfo = null;
    try {
      G._trace &&
        G._trace.push({
          step: 'client_send_message_start',
          time: Date.now(),
        });
      const a5 = await H.sendMessage(E, F, G);
      G._trace &&
        G._trace.push({
          step: 'client_send_message_success',
          time: Date.now(),
        });
      a5 && at.set('' + a5.key.remoteJid + a5.key.id, a5);
      process.env.EMIT_OWN_EVENT &&
        process.nextTick(() => {
          const a7 = {
            messages: [a5],
            type: 'notify',
          };
          H.processingMutex.mutex(() => H.ev.emit('messages.upsert', a7));
        });
      return a5;
    } catch (a6) {
      G._trace &&
        G._trace.push({
          step: 'client_send_message_error',
          time: Date.now(),
          error: a6.message,
        });
      throw a6;
    }
  }
  const J = {
    edit: !F.delete.fromMe && F.delete.remoteJid.endsWith('@g.us') ? '8' : '7',
  };
  if ('delete' in F) {
    if (!F.delete.fromMe && F.delete.me) {
      const a9 = F.delete.id;
      const aa = Math.floor((1 * Date.now()) / 1000);
      const ab = {
        id: a9,
        fromMe: false,
        timestamp: aa,
      };
      const ac = {
        messages: [ab],
      };
      const aD = {
        clear: ac,
      };
      return await H.chatModify(aD, E, []);
    }
  }
  G.ephemeralExpiration = G.ephemeralExpiration ?? (await aC(E, H.levanterId));
  G.upload = H.waUploadToServer;
  ('template' in F || 'poll' in F) && (G.ephemeralExpiration = 0);
  G.userJid = H.user.id;
  const K = await aB(F, G);
  const L = ak(E, K, G);
  try {
    await H.relayMessage(E, L.message, {
      messageId: L.key.id,
      additionalAttributes: J,
    });
    at.set('' + L.key.remoteJid + L.key.id, L);
    process.env.EMIT_OWN_EVENT &&
      process.nextTick(() => {
        const aE = {
          messages: [L],
          type: 'notify',
        };
        H.processingMutex.mutex(() => H.ev.emit('messages.upsert', aE));
      });
    return L;
  } catch (aE) {
    az.logger.error(aE);
  }
};
