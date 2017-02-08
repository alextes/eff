const fs = require('fs');
const path = require('path');
const pify = require('pify');
const pino = require('pino')({ level: 'debug' });
// TODO: generate all vid url's for client
// TODO: shuffle them
// TODO: create a session per client and clone the url list
// TODO: pop one url for every next vid request

function readFiles() {
  pino.debug('reading files from vid/');
  return pify(fs.readdir(path.join(__dirname, 'vid')));
}
