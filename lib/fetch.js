const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
const os = require('os');
const config = require('../config');

const TEMP_DIR = require('./constant').TEMP_DIR || path.join(os.tmpdir(), 'levanter');
const MAX_UPLOAD = Number.isFinite(Number(config.MAX_UPLOAD))
  ? Number(config.MAX_UPLOAD)
  : 230;
const SAFE_MAX_UPLOAD = Math.min(Math.max(Number(MAX_UPLOAD), 1), 1998);

const MIME_BY_EXTENSION = {
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
  gif: 'image/gif',
  mp4: 'video/mp4',
  webm: 'video/webm',
  mp3: 'audio/mpeg',
  ogg: 'audio/ogg',
  wav: 'audio/wav',
  pdf: 'application/pdf',
  json: 'application/json',
  txt: 'text/plain',
  m4a: 'audio/mp4',
  zip: 'application/zip',
};

function sanitizeFilename(value = '') {
  return String(value)
    .replace(/\s+/g, '_')
    .replace(/[\\/?:*|<>%]/g, '')
    .replace(/^.*[\\/]/, '')
    .replace(/^[a-z0-9-]+\.[a-z]{2,}[_\-\s]+/i, '')
    .slice(0, 255) || 'download';
}

function nameFromUrl(url = '') {
  try {
    const parsed = new URL(url);
    const baseName = path.basename(parsed.pathname) || 'download';
    return sanitizeFilename(baseName);
  } catch {
    return sanitizeFilename(url);
  }
}

async function detectMime(buffer, name = '') {
  try {
    const { fileTypeFromBuffer } = await import('file-type');
    const detected = await fileTypeFromBuffer(buffer);
    if (detected && detected.mime) return detected.mime;
  } catch {
    // fallback below
  }

  const extension = (name || '').split('.').pop()?.toLowerCase();
  return MIME_BY_EXTENSION[extension] || 'application/octet-stream';
}

async function getBuffer(url, useCache = false, _forceFallback = false, _extra = null, _reserved = null) {
  if (!url) {
    throw new Error('URL is required');
  }

  const normalizedUrl = String(url).trim();
  const fileName = nameFromUrl(normalizedUrl);
  const targetPath = path.join(TEMP_DIR, fileName);

  if (useCache && fs.existsSync(targetPath)) {
    const buffer = fs.readFileSync(targetPath);
    const mimetype = await detectMime(buffer, fileName);
    return {
      buffer,
      name: fileName,
      mimetype,
      type: mimetype.split('/')[0],
      size: buffer.length,
      data: false,
    };
  }

  const response = await axios({
    method: 'get',
    url: normalizedUrl,
    responseType: 'arraybuffer',
    timeout: 30000,
    validateStatus: (status) => status >= 200 && status < 400,
  });

  const buffer = Buffer.from(response.data || []);
  const mimetype = await detectMime(buffer, fileName);

  if (useCache && buffer.length > 0) {
    fs.ensureDirSync(TEMP_DIR);
    fs.writeFileSync(targetPath, buffer);
  }

  return {
    buffer,
    name: fileName,
    mimetype,
    type: mimetype.split('/')[0],
    size: buffer.length,
    data: false,
  };
}

async function getJson(url) {
  const response = await axios.get(url, {
    timeout: 30000,
    responseType: 'json',
  });
  return response.data;
}

async function download(url, fileNameHint = '') {
  try {
    const response = await axios({
      method: 'get',
      url,
      responseType: 'arraybuffer',
      timeout: 30000,
      validateStatus: (status) => status >= 200 && status < 400,
    });

    const buffer = Buffer.from(response.data || []);
    const mime = response.headers['content-type'] || 'application/octet-stream';
    const detectedName = sanitizeFilename(fileNameHint || nameFromUrl(url));
    const ext = path.extname(detectedName).replace(/^\./, '');
    const type = mime.split('/')[0];

    if (!buffer.length) {
      return { error: true, ext: '', type: '', buffer: null };
    }

    return {
      error: false,
      ext: ext.replace(/^\./, ''),
      type,
      buffer,
      name: detectedName,
      mimetype: mime,
    };
  } catch (error) {
    return {
      error: true,
      ext: '',
      type: '',
      buffer: null,
      reason: error?.message || String(error),
    };
  }
}

module.exports = {
  nameFromUrl,
  getBuffer,
  getJson,
  download,
};
