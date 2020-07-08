const express = require("express");
const mainRoute = require("./main");

const router = new express.Router();

router.get('*.js', function(req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  console.log('!!', req.url);
  next();
});

router.get('*.css', function(req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/css');
  console.log('!!', req.url);
  next();
});

router.get("*", mainRoute);

module.exports = router;
