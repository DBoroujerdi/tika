const tap = require("tap");
const { curry } = require("..");

const func = curry(function() {
  return "hello";
});

tap.equal(func(), "hello");

const add = curry(function(a, b) {
  return a + b;
});

tap.equal(add(2, 2), 4);
tap.equal(add(2)(5), 7);

const format = curry(function(a, b, c) {
  return `${a}/${b}/${c}`;
});

tap.equal(format("a", "b", "c"), "a/b/c");
tap.equal(format("a")("b")("c"), "a/b/c");
