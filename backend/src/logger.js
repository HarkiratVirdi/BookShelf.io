// 'info' default log level
const options = {
  level: process.env.LOG_LEVEL || 'debug',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
};

module.exports = require('pino')(options);
