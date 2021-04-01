const error = () => {
  return async (ctx, next) => {
    try {
      await next();
      if (ctx.status === 200) {
        ctx.res.success();
      }
    } catch (err) {
      if (err.code) {
        // 自己主动抛出的错误
        ctx.res.fail({ code: err.code, msg: err.message });
      } else {
        // 程序运行时的错误
        ctx.app.emit('error', err, ctx);
      }
    }
  };
};

module.exports = error;
