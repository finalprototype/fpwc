const express = require('express');
const rateLimit = require('express-rate-limit');
const searchRoutes = require('./search');

const router = new express.Router();

const searchRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

router.get('/search-languages', searchRateLimit, searchRoutes.simpleQueryLanguages);

module.exports = router;
