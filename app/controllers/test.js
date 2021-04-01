const list = async ctx => {
  const { name, age } = ctx.request.query;
  ctx.body = name + age;
};

module.exports = {
  list
};
