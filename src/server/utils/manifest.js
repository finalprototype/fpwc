const fs = require('fs');

let manifest = null;
const collections = {
  fonts: [],
  scripts: [],
  images: [],
  videos: [],
};
const manifestFilePath = `${__dirname}/../../../build/manifest.json`;

module.exports = function getManifest() {
  if (manifest === null) {
    manifest = JSON.parse(fs.readFileSync(manifestFilePath).toString());
    Object.keys(manifest).forEach((key) => {
      if (/\.woff2$/i.test(key)) {
        collections.fonts.push(manifest[key]);
      } else if (/\.js?$/i.test(key)) {
        collections.scripts.push(manifest[key]);
      } else if (/\.mp4?$/i.test(key)) {
        collections.videos.push(manifest[key]);
      } else if (/\.(jpg|gif|png|svg)?$/i.test(key)) {
        collections.images.push(manifest[key]);
      }
    });
  }
  return { ...manifest, ...collections };
};
