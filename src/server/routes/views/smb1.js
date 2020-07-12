const settings = require("../../settings");

module.exports = async (req, res) => {
  const viewParams = {
    bootstrap: JSON.stringify({
      env: settings.ENV_NAME,
    }),
  };

  res.set({
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  });

  return res.render("smb1", viewParams);
};
