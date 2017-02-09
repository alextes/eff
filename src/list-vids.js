
const fs = require('fs');
const path = require('path');
const pify = require('pify');
const pino = require('pino')();

module.exports = () => {
  pino.debug('reading files from vid/');
  return pify(fs.readdir)(path.join(__dirname, '..', 'vid'));
};
