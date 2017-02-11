const fs = require('fs');
const path = require('path');
const pify = require('pify');
const buildVidList = require('./build-vid-list');

test('outputs the list of files in vid/', async () => {
  const exFilenames = await buildVidList.listVids();
  const acFilenames = await pify(fs.readdir)(path.join(__dirname, 'public', 'eff', 'vid'));
  expect(exFilenames).toEqual(acFilenames);
});

test.skip('writes the list of vids', async () => {});

