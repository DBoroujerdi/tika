const tap = require("tap");
const { reduce } = require("../");

function add(a, b) {
  return a + b;
}

tap.equal(reduce(add, 0, [1, 1, 1]), 3);

tap.equal(reduce(add)(0)([1, 1, 1]), 3);
