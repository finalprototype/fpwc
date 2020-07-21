const express = require("express");
const mainRoute = require("./main");
const smb1Route = require("./smb1");
const getManifest = require("../../utils/manifest");

const router = new express.Router();

router.get("*", mainRoute);

module.exports = router;
