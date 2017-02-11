const fs = require('fs');
const path = require('path');
const pify = require('pify');
const pino = require('pino')();

function listVids() {
  pino.debug('reading files from vid/');
  return pify(fs.readdir)(path.join(__dirname, 'public', 'eff', 'vid'));
}

async function buildList() {
  const vids = await listVids();
  const vidsPath = path.join(__dirname, 'public', 'eff');
  return pify(fs.writeFile)(`${vidsPath}/vid-list.json`, JSON.stringify(vids));
}

module.exports = {
  listVids,
  buildList,
};
