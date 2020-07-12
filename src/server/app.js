const express = require("express");
const path = require("path");
const fs = require("fs");
const router = require("./routes");
const smb1Router = require("./routes/smb1");
const settings = require("./settings");

const app = express();
app.set("views", `${__dirname}/templates`);
app.set("view engine", "ejs");
app.set("view cache", false);
app.set("env", settings.ENV_NAME);

app.use(express.static('../../build'));
app.use(smb1Router);
app.use(router);

module.exports = app;
