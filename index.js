// Takes a callback function as an argument and calls it.
function receivesAFunction(callback) {
  return callback();
}

// Returns a named function.
function returnsANamedFunction() {
  function namedFunction() {
    // This function can be empty or do something.
  }
  return namedFunction;
}

// Returns an anonymous function.
function returnsAnAnonymousFunction() {
  return function() {
    // This anonymous function can be empty or do something.
  };
}

// Export the functions for the test suite.
module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction
};
