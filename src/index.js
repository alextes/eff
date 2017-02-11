require('babel-polyfill');
const pino = require('pino')();
const { buildList } = require('./build-vid-list.js');
const server = require('./server.js');

// build the video's list
buildList()
  .catch((err) => {
    pino.error(err);
  });

// start the server
const PORT = 8080;
server.listen(PORT);
pino.info(`server listening on ${PORT}`);
