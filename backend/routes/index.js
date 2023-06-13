import express from "express";
import os from "os";
import pack from '../../package.json' assert { type: "json" };
import { createSuccessResponse } from '../response.js';
const router = express.Router();
const hostName = os.hostname();

router.get('/', (req, res) => {
    //no cache
    res.setHeader('Cache-Control', 'no-cache');
    res.status(200).json(
      createSuccessResponse({
        description: pack.description,
        version: pack.version,
        hostname: hostName,
        author: pack.author,
      })
    );
    console.log('Health check: success');
  });

export default router;