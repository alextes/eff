require('babel-polyfill');
const pino = require('pino')();
const server = require('./server.js');

const PORT = 8080;
server.listen(PORT);
pino.info(`server listening on ${PORT}`);
