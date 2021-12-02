const fs = require('fs')
const pino = require('pino');
const pretty = require('pino-pretty')

var streams = [
  {stream: pretty()},
  {level: 'debug', stream: process.stdout},
  {level: 'error', stream: process.stderr},
  {level: 'fatal', stream: process.stderr}
]

const logger = pino({
  name: 'my-app',
  level: 'debug', // must be the lowest level of all streams
}, pino.multistream(streams))
module.exports = logger;
