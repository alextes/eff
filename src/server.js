/* eslint no-param-reassign: ["error", { "props": false }] */
const Koa = require('koa');
const logger = require('koa-pino-logger');
const serve = require('koa-static');
const path = require('path');

const app = new Koa();
app.use(logger());
app.use(serve(path.join(__dirname, 'public'), { maxage: 3600000 }));

module.exports = app;
