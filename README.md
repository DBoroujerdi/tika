# Tika

Functional programming

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

# license

MIT
