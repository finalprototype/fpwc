const settings = require("../../settings");
const getManifest = require("../../utils/manifest");
const version = require('../../../../package.json').version;

const escapeHTML = (str) => {
  return str
    .replace(/&/g, "&amp")
    .replace(/</g, "&lt")
    .replace(/>/g, "&gt");
};

module.exports = async (req, res) => {
  const manifest = getManifest();
  const config = {
    manifest,
    env: settings.ENV_NAME,
    version,
    assets_path: settings.ASSETS_URL_PATH,
    fonts: [
      `${settings.ASSETS_URL_PATH}neonavy3d.woff2`,
      `${settings.ASSETS_URL_PATH}Fatya.woff2`,
      `${settings.ASSETS_URL_PATH}SuperPlumberBrothers.woff2`,
      `${settings.ASSETS_URL_PATH}Roboto-Condensed.woff2`,
    ]
  };

  const viewParams = {
    bootstrap: escapeHTML(JSON.stringify(config)),
  };

  res.set({
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  });

  return res.render("main", viewParams);
};
