
const fs = require('fs');
const os = require('os');
const path = require('path');
const pino = require('pino');
const pretty = require('pino-pretty');
const streams = [
  {stream: pretty(undefined)},
  {stream: fs.createWriteStream(`${path.join(os.homedir(),'.age_bot','logs','production.log')}`)},
  {level: 'debug', stream: fs.createWriteStream(`${path.join(os.homedir(),'.age_bot','logs','debug.log')}`)},
  {level: 'fatal', stream: process.stderr}
];

if(process.params['debug'])
{
  streams.push({
    level:debug,
    stream: process.stdout
  })
}

exports.logger = pino({level: 'debug'}, pino.multistream(streams));
