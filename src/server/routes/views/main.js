const settings = require("../../settings");
const getManifest = require("../../utils/manifest");

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
    js: manifest.js,
    css: manifest.css,
    env: settings.ENV_NAME,
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
