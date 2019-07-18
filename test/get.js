const tap = require("tap");
const { get } = require("../");

tap.equal(get("foo", { foo: "bar" }), "bar");
tap.equal(get("foo")({ foo: "bar" }), "bar");
