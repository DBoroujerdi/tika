function _curry(fn, acc) {
  return function() {
    const acc2 = acc.concat(...arguments);
    if (acc2.length === fn.length) {
      return fn.apply(null, acc2);
    } else {
      return _curry(fn, acc2);
    }
  };
}

exports.curry = function(fn) {
  return _curry(fn, []);
};
