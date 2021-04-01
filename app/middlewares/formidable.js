const Formidable = require('formidable');

module.exports = () => {
  return async function (ctx, next) {
    const form = new Formidable({
      multiples: true, 
      //  上传的临时文件保存路径
      uploadDir: ctx.config.tempFilePath
    });

    // eslint-disable-next-line promise/param-names
    await new Promise((reslove, reject) => {
      form.parse(ctx.req, (err, fields, files) => {
        if (err) {
          reject(err);
        } else {
          ctx.request.body = fields;
          ctx.request.files = files;
          reslove();
        }
      });
    });

    await next();
  };
};
