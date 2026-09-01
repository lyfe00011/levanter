const { getAntiLink, getWord } = require('./db');
const axios = require('axios');
const { getFloor, escapeRegExp } = require('./utils');

const SPAM_LEVELS = { low: 20, medium: 40, high: 70 };
const BASE_SCORES = {
  default: 0,
  spam: 8,
  link: 12,
  antiLink: 12,
  antiWord: 8,
  mention: 5,
  forward: 7,
};
const SCORE_MODIFIERS = {
  url: 10,
  link: 10,
  http: 8,
  promo: 4,
  free: 5,
  money: 6,
  win: 6,
  claim: 5,
};

const URL_RE = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|ftp:\/\/[a-zA-Z0-9]+\.[^\s]{2,}|[a-zA-Z0-9-]+\.[a-zA-Z]{2,})/gi;

function normalizeUrl(value) {
  if (!value || typeof value !== 'string') {
    return '';
  }

  let normalized = value.trim().toLowerCase();
  normalized = normalized
    .replace(/^https?:\/\//, '')
    .replace(/^ftp:\/\//, '')
    .replace(/^www\./, '');

  if (!normalized.includes('?') && normalized.endsWith('/') && normalized.split('/').length === 2) {
    normalized = normalized.slice(0, -1);
  }

  return normalized;
}

function isUrlMatch(candidate, pattern) {
  try {
    const target = candidate.trim();
    const expected = pattern.trim();
    if (!target || !expected) {
      return false;
    }

    const sourceUrl = new URL(target.startsWith('http') ? target : `http://${target}`);
    const sourceHost = sourceUrl.hostname.toLowerCase();
    const sourcePath = `${sourceUrl.pathname}${sourceUrl.search}${sourceUrl.hash}`;

    const patternLower = expected.toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '');
    if (patternLower.includes('/')) {
      const [hostPart, ...rest] = patternLower.split('/');
      const pathPart = '/' + rest.join('/');
      return (
        (sourceHost === hostPart || sourceHost === `www.${hostPart}` || `www.${sourceHost}` === hostPart) &&
        sourcePath.toLowerCase().startsWith(pathPart.toLowerCase())
      );
    }

    if (patternLower.startsWith('*.')) {
      return sourceHost.endsWith(patternLower.slice(2));
    }

    return (
      sourceHost === patternLower ||
      sourceHost === `www.${patternLower}` ||
      `www.${sourceHost}` === patternLower
    );
  } catch (error) {
    return false;
  }
}

async function checkUrlReachability(url) {
  try {
    const target = url.startsWith('http') ? url : `https://${url}`;
    const response = await axios.head(target, { timeout: 3000 });
    return response.status >= 200 && response.status < 400;
  } catch (error) {
    return false;
  }
}

async function isAntiLink(text, remoteJid, session) {
  const matches = String(text || '').match(URL_RE);
  if (!matches || matches.length === 0) {
    return false;
  }

  const setting = await getAntiLink(remoteJid, session);
  if (!setting || !setting.enabled) {
    return false;
  }

  const { action, allowedUrls = '' } = setting;
  const entries = String(allowedUrls)
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  const allow = entries.filter((item) => !item.startsWith('!'));
  const deny = entries.filter((item) => item.startsWith('!')).map((item) => item.slice(1));
  const hasExplicitRules = entries.length > 0;

  if (!hasExplicitRules && matches.length > 0) {
    return action;
  }

  for (const match of matches) {
    if (!/^https?:\/\//i.test(match) && !/^www\./i.test(match)) {
      if (!(await checkUrlReachability(match))) {
        continue;
      }
    }

    let isAllowed = false;
    for (const value of allow) {
      if (isUrlMatch(match, value)) {
        isAllowed = true;
        break;
      }
    }

    if (!isAllowed) {
      for (const value of deny) {
        if (isUrlMatch(match, value)) {
          return action;
        }
      }

      if (allow.length > 0) {
        return action;
      }
    }
  }

  return false;
}

async function isWords(text, remoteJid, session) {
  const setting = await getWord(remoteJid, session);
  if (!setting || !setting.enabled || !setting.words) {
    return false;
  }

  const words = String(setting.words)
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  if (words.length === 0) {
    return false;
  }

  const content = String(text || '');
  for (const word of words) {
    const pattern = new RegExp(`\\b${escapeRegExp(word)}\\b`, 'i');
    if (pattern.test(content)) {
      return setting.action;
    }
  }

  return false;
}

function spamCheck(message, chatId, userId, type, stage, level, scoreKey, extra, session) {
  const source = String(message || '');
  const normalized = source.toLowerCase();

  const baseScore = BASE_SCORES[type] ?? BASE_SCORES.default ?? 0;
  const scoreModifiers = SCORE_MODIFIERS;
  const thresholdKey = level && SPAM_LEVELS[level] !== undefined ? level : 'medium';
  const threshold = SPAM_LEVELS[thresholdKey] ?? SPAM_LEVELS.medium;

  const stateKey = `${session ?? 'global'}:${chatId ?? 'global'}:${userId ?? 'unknown'}`;
  const spamState = globalThis.__levanter_spam_state ?? (globalThis.__levanter_spam_state = new Map());
  const now = getFloor((1 * new Date()) / 1000);
  const current = spamState.get(stateKey) ?? { count: 0, lastWindow: now, score: 0 };

  if (now - current.lastWindow > 60) {
    current.count = 0;
    current.score = 0;
    current.lastWindow = now;
  }

  let score = baseScore + current.score + current.count * 2;

  for (const [key, value] of Object.entries(scoreModifiers)) {
    if (normalized.includes(key.toLowerCase())) {
      score += Number(value) || 0;
    }
  }

  if (/[A-Z]{5,}/.test(source)) {
    score += 5;
  }

  if (/[!?]{2,}/.test(source)) {
    score += 3;
  }

  if (/(?:https?:\/\/|www\.)/i.test(source)) {
    score += 10;
  }

  current.count += 1;
  current.score = score;
  current.lastWindow = now;
  spamState.set(stateKey, current);

  let levelName = 'low';
  if (score >= SPAM_LEVELS.high) {
    levelName = 'high';
  } else if (score >= SPAM_LEVELS.medium) {
    levelName = 'medium';
  }

  const result = {
    score,
    level: levelName,
    isSpam: score >= threshold,
    raw: source,
    chatId,
    userId,
    type,
    stage,
    scoreKey,
    extra,
  };

  result.valueOf = () => result.isSpam;
  return result;
}


exports.normalizeUrl = normalizeUrl;
exports.isAntiLink = isAntiLink;
exports.isWords = isWords;
exports.spamCheck = spamCheck;
