const tap = require("tap");
const tika = require("..");

tap.equal(tika.get("foo", { foo: "bar" }), "bar");
tap.equal(tika.get("foo")({ foo: "bar" }), "bar");

function add(a, b) {
  return a + b;
}

tap.equal(tika.reduce(add, 0, [1, 1, 1]), 3);
tap.equal(tika.reduce(add)(0)([1, 1, 1]), 3);
