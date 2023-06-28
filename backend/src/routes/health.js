const express = require('express');
const { hostname } = require('os');
const { createSuccessResponse } = require('../response');
const router = express.Router();
// version and author from package.json
const { description, version, author } = require('../../package.json');
const logger = require('../logger');

router.get('/', (req, res) => {
  //no cache
  res.setHeader('Cache-Control', 'no-cache');
  res.status(200).json(
    createSuccessResponse({
      description,
      version,
      hostname: hostname(),
      author,
    })
  );
  logger.info('Health check: success');
});

module.exports = router;
