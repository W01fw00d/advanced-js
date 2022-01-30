// Generate an array, containing the Fibonacci sequence, up until the nth term.

const fibonacci = (length) => {
  // My solution
  const result = [];

  for (let i = 0; i < length; i++) {
    result.push(i > 1 ? result[i - 1] + result[i - 2] : i);
  }

  return result;
};

/* const fibonacci = (n) =>
  // Solution
  [...Array(n)].reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  ); */

console.log(fibonacci(10));
