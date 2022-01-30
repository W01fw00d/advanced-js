/* Create a function pipe that performs left-to-right function composition
by returning a function that accepts one argument. */

const square = (v) => v * v;
const double = (v) => v * 2;
const addOne = (v) => v + 1;

const pipe =  // Solution
  (...fns) =>
  (x) =>
    fns.reduce((v, fn) => fn(v), x);

const res = pipe(square, double, addOne);
console.log(res(3)); // 19; addOne(double(square(3)))
