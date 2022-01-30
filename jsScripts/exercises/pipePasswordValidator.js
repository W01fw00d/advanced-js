const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, fn) => fn(v), x);

// Create a readable pipe for managing user passwords

// First, you need to validate the password
// Password must be at least 8 length
const validate = (password) => ({ password, isValid: password.length >= 8 });

// Then, you need to save it (just mock save it in an object)
const save = ({ password, isValid }) => {
  console.log(
    isValid
      ? "Success: Password has been saved!"
      : "Error: Password is not valid"
  );
  return password;
};

// Lastly, mask it with ### before displaying it to the console
const mask = (password) => "#".repeat(password.length);

const handlePassword = pipe(validate, save, mask);

console.log("Valid example:", "12345678");
console.log(handlePassword("12345678"));

console.log("Invalid example:", "1234567");
console.log(handlePassword("1234567"));
