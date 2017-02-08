const fs = require('fs');
const Koa = require('koa');
const logger = require('koa-pino-logger')
const path = require('path');
const pify = require('pify');
const pino = require('pino')({ level: 'debug' });

// TODO: generate all vid url's for client
// TODO: shuffle them
// TODO: create a session per client and clone the url list
// TODO: pop one url for every next vid request

const app = new Koa();
app.use(logger());

// uses async arrow functions
app.use((ctx, next) => {
  return next()
    .catch((err) => {
      ctx.body = { message: err.message };
      ctx.status = err.status || 500;
    });
});

app.use((ctx) => {
  ctx.response.body = 'hello';
});

function readFiles() {
  pino.debug('reading files from vid/');
  return pify(fs.readdir(path.join(__dirname, 'vid')));
}

module.exports = app;
