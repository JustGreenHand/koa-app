const assert = require('assert');

const throwError = (code, message) => {
  const err = new Error(message);
  err.code = code;
  throw err;
};

module.exports = {
  assert,
  throwError
};
