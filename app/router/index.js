const KoaRouter = require('koa-router');
const router = new KoaRouter();

const routeList = require('./routes');
const paramValidator = require('../middlewares/paramValidator');

routeList.forEach(item => {
  const { method, path, controller, valid } = item;
  router[method](path, paramValidator(valid), controller);
});

module.exports = router;
