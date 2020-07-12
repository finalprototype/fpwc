const express = require("express");
const subdomain = require('express-subdomain');
const smb1View = require("./views/smb1");

const router = new express.Router();
router.get("*", smb1View);

const subRouter = subdomain('smb1', router);

module.exports = subRouter;
