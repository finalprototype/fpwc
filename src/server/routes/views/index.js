const express = require("express");
const mainRoute = require("./main");
const getManifest = require("../../utils/manifest");

const router = new express.Router();

router.get("*", mainRoute);

module.exports = router;
