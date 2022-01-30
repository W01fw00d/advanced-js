// Create a function that masks a string of characters with # except for the last four (4) characters.

const mask = (number) => {
  // My solution
  const numberLength = number.length;
  const nNonVisibleDigits = numberLength - 4;

  console.log(
    `${"#".repeat(nNonVisibleDigits)}${number.substring(
      nNonVisibleDigits,
      numberLength
    )}`
  );
};

/* const mask = (str, maskChar = "#") =>
  str.slice(-4).padStart(str.length, maskChar); */ // Shortest solution

mask("123456789"); // "#####6789"
