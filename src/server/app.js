const express = require("express");
const expressStaticGzip = require("express-static-gzip");
const path = require("path");
const fs = require("fs");
const router = require("./routes");
const settings = require("./settings");

const app = express();
app.set("views", `${__dirname}/templates`);
app.set("view engine", "ejs");
app.set("view cache", false);
app.set("env", settings.ENV_NAME);

app.use('/', expressStaticGzip(path.resolve(__dirname, '../../build')))
app.use(router);


module.exports = app;
