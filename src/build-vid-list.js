const fs = require('fs');
const path = require('path');
const pify = require('pify');

function listVids() {
  return pify(fs.readdir)(path.join(__dirname, 'public', 'eff', 'vid'));
}

function buildList() {
  const vidsPath = path.join(__dirname, 'public', 'eff');
  return listVids()
    .then(vids =>
      pify(fs.writeFile)(`${vidsPath}/vid-list.json`, JSON.stringify(vids))
    )
}

buildList()
  .catch((err) => {
    console.error(err);
  });
