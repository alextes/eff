const Koa = require('koa');
const logger = require('koa-pino-logger');
const serve = require('koa-static');
const path = require('path');

// TODO: generate all vid url's for client
// TODO: shuffle them
// TODO: create a session per client and clone the url list
// TODO: pop one url for every next vid request

const app = new Koa();
app.use(logger());
app.use(serve(path.join(__dirname, 'public'), { maxage: 3600000 }));

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

module.exports = app;
