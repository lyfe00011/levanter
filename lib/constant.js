const path = require('path');
const fs = require('fs-extra');
const { exec } = require('child_process');
const sharp = require('sharp');
const ffmpeg = require('fluent-ffmpeg');
const { NodeCache } = require('@cacheable/node-cache');

sharp.cache(false);
sharp.concurrency(1);

const chats = new NodeCache({
  stdTTL: 300,
  useClones: false,
});

const TEMP_DIR = path.join(__dirname, '../temp');

async function probeDuration(sourcePath) {
  return new Promise((resolve, reject) => {
    ffmpeg(sourcePath).ffprobe((error, metadata) => {
      if (error) {
        reject(error);
        return;
      }

      const duration = metadata?.format?.duration;
      resolve(duration || undefined);
    });
  });
}

async function genThumbnail(source, width = 64, quality = 64) {
  const image = await sharp(source)
    .resize(width, width, { fit: 'inside' })
    .jpeg({ quality })
    .toBuffer();

  return image.toString('base64');
}

function writeStream(target, key, value) {
  Object.defineProperty(target, key, value);
}

async function extractVideoThumb(videoInput) {
  const randomSuffix = Math.random().toString(36).slice(2);
  const hasBuffer = Buffer.isBuffer(videoInput);
  const tempVideoPath = hasBuffer
    ? path.join(TEMP_DIR, `temp_video_${randomSuffix}.mp4`)
    : videoInput;
  const thumbPath = path.join(TEMP_DIR, `thumb_${randomSuffix}.jpg`);

  if (hasBuffer) {
    fs.writeFileSync(tempVideoPath, videoInput);
  }

  try {
    const duration = await probeDuration(tempVideoPath);
    await new Promise((resolve, reject) => {
      exec(
        `ffmpeg -y -i "${tempVideoPath}" -ss 00:00:00.001 -vframes 1 "${thumbPath}"`,
        (error) => {
          if (error) {
            reject(error);
            return;
          }
          resolve();
        },
      );
    });

    const imageBuffer = fs.readFileSync(thumbPath);
    const thumbBase64 = await genThumbnail(imageBuffer);

    if (hasBuffer && fs.existsSync(tempVideoPath)) {
      fs.unlinkSync(tempVideoPath);
    }
    if (fs.existsSync(thumbPath)) {
      fs.unlinkSync(thumbPath);
    }

    return { duration, thumbnail: thumbBase64 };
  } catch (error) {
    if (hasBuffer && fs.existsSync(tempVideoPath)) {
      fs.unlinkSync(tempVideoPath);
    }
    if (fs.existsSync(thumbPath)) {
      fs.unlinkSync(thumbPath);
    }
    throw error;
  }
}

function resizeToFit(width, height, maxDimension = 720) {
  if (width <= maxDimension && height <= maxDimension) {
    return {
      width: Math.floor(width),
      height: Math.floor(height),
    };
  }

  const scale = Math.max(width / maxDimension, height / maxDimension);
  return {
    width: Math.floor(width / scale),
    height: Math.floor(height / scale),
  };
}

async function getImgRes(source, keepRatio = false) {
  const metadata = await sharp(source).metadata();
  const width = metadata.width || 0;
  const height = metadata.height || 0;

  if (keepRatio) {
    return resizeToFit(width, height);
  }

  return {
    width,
    height,
  };
}

async function genProPic(source, width = 720, height = 720, quality = 100) {
  return sharp(source)
    .resize(width, height, { fit: 'inside' })
    .jpeg({
      quality,
      chromaSubsampling: '4:4:4',
    })
    .toBuffer();
}

module.exports = {
  chats,
  TEMP_DIR,
  genThumbnail,
  writeStream,
  extractVideoThumb,
  getImgRes,
  genProPic,
};
