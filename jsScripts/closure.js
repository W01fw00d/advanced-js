var updateClickCount = (function () {
  // Closure as a self-invoking function
  var counter = 0; // This variable is "private"

  return function () {
    ++counter;
    // Do something with counter
    console.log({ counter });
  };
})();

// console.log(counter); // Not defined
updateClickCount(); // 1
updateClickCount(); // 2
