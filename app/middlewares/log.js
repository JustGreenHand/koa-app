const log4js = require('log4js');
const { outDir, flag, level } = require('../config').logConfig;

log4js.configure({
  appenders: { cheese: { type: 'file', filename: `${outDir}/receive.log` } },
  categories: { default: { appenders: [ 'cheese' ], level: 'info' } },
  //  pm2中默认无法输出
  pm2: true
});

/**
 * 必须定义log的输出级别，因为log4js的缺省级别是off，也就是所有的都不会输出
 */
const logger = log4js.getLogger();
logger.level = level;

module.exports = () => {
  return async (ctx, next) => {
    const { method, path, origin, query, body, headers, ip } = ctx.request;
    const data = {
      method,
      path,
      origin,
      //  url后面的参数 ?name=*******
      query,
      body,
      ip,
      headers
    };
    await next();
    if (flag) {
      const { status, params } = ctx;
      data.status = status;
      data.params = params;
      data.result = ctx.body || 'no content';
      if (ctx.body.code !== 0) {
        logger.error(JSON.stringify(data));
      } else {
        logger.info(JSON.stringify(data));
      }
    }
  };
};
