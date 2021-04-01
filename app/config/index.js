const base = require('./base');
const dev = require('./dev');
const pre = require('./pre');
const pro = require('./pro');

const env = process.env.NODE_ENV || 'dev';

const configMap = {
  dev,
  pre,
  pro
};

module.exports = Object.assign(base, configMap[env]);
