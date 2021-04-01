const { test } = require('../controllers');
const { scmTest } = require('../schema/index');

const routes = [
  {
    //  测试
    method: 'get',
    path: '/a',
    valid: scmTest.list,
    controller: test.list
  }
];

module.exports = routes;
