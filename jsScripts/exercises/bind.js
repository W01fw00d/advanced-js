/* Create a standalone function bind that is functionally equivalent
to the method Function.prototype.bind */

function example() {
  console.log(this);
}

// const boundExample = example.bind({ a: true }); // JS API use example

function bind(functionToBind, that) {
  // My solution
  return () => functionToBind.call(that);
}

// const bind = (fn, context) => (...args) => fn.apply(context, args) // Complete solution

const boundExample = bind(example, { a: true });

boundExample.call({ b: true }); // logs { a: true }
