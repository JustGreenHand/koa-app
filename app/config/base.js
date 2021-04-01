const pwd = process.cwd();

module.exports = {
  //  临时文件存放地址
  tempFilePath: `${pwd}/app/public/temp`,
  logConfig: {
    flag: true,
    outDir: `${pwd}/app/public/log`,
    level: 'info'
  }
};
