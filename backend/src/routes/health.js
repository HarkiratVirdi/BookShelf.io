const express = require('express');
const { hostname } = require('os');
const { createSuccessResponse } = require('../response');
const router = express.Router();
// version and author from package.json
const { description, version, author } = require('../../package.json');

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
    console.log('Health check: success');
  });

  module.exports = router;