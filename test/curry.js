const tap = require("tap");
const { curry } = require("../");

const addCurried = curry(function(a, b) {
  return a + b;
});

tap.equal(addCurried(2, 2), 4);

tap.type(addCurried, "function");

const addOne = addCurried(1);

tap.type(addOne, "function");

tap.type(addOne(2), "number");
tap.equal(addOne(2), 3);

const formatName = curry(function(first, middle, last) {
  return `${first}/${middle}/${last}`;
});

tap.equal(formatName("a", "b", "c"), "a/b/c");
tap.equal(formatName("jon")("jo")("shelvey"), "jon/jo/shelvey");
