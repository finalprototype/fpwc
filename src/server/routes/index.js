const express = require("express");
const viewRoutes = require("./views");

const router = new express.Router();

router.use(viewRoutes);

module.exports = router;
