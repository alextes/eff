const fs = require('fs');
const path = require('path');
const pify = require('pify');
const listVids = require('./list-vids');

test('outputs the list of files in vid/', async () => {
  const exFilenames = await listVids();
  const acFilenames = await pify(fs.readdir)(path.join(__dirname, '..', 'vid'));
  expect(exFilenames).toEqual(acFilenames);
});
