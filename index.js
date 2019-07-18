exports.curry = function(fn) {
  function rec(args) {
    if (args.length === 0) {
      return fn.apply(null);
    }

    if (args.length === fn.length) {
      return fn.apply(null, args);
    }

    return function() {
      return rec([...args, ...arguments]);
    };
  }

  return function() {
    return rec([...arguments]);
  };
};

exports.get = this.curry(function(key, obj) {
  return obj[key];
});

exports.reduce = this.curry(function(fn, init, arr) {
  return arr.reduce(fn, init);
});
