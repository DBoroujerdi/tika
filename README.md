# Tika

Javascript functional programming practice

## Currying

```
const tika = require('tika');

tika.curry(function(a, b) {
  return a + b;
})(1, 2); // => 3

tika.curry(function(a, b) {
  return a + b;
})(1)(2); // => 3
```

## Curried functions

Get
```
tika.get("foo")({ foo: "bar" }) // => bar
```

Reducer
```
tika.reduce(function(a, b) {
  return a + b;
})(0)([1, 1, 1]) // => 3
```

# license

MIT
