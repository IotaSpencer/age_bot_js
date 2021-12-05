const pino = require('pino');
const pretty = require('pino-pretty');
import fs from 'fs'
import os from 'os'
import path from 'path'
const streams = [
  {stream: pretty(undefined)},
  {stream: fs.createWriteStream(`${path.join(os.homedir(),'.age_bot','logs','production.log')}`)},
  {level: 'debug', stream: fs.createWriteStream(`${path.join(os.homedir(),'.age_bot','logs','debug.log')}`)},
  {level: 'fatal', stream: process.stderr}
];
const logger = pino();
module.exports = logger;
