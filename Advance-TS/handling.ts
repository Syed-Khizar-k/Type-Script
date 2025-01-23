/*

Error Handling
Write a function to:
Validate user input (e.g., a function that takes a string input and ensures it only contains alphabets).
Throw a custom error for invalid inputs.
Use a try-catch block to display user-friendly error messages.

*/
//validation error class to throw errors specifically
class validationError extends Error {
  constructor(message: string) {
    super(message);
  }
}
//function for validation of input
function validateInput(input: string) {
  if (typeof input !== "string") {
    throw new validationError("input must be string");
  }

  if (!/^[a-zA-Z]+$/.test(input)) {
    throw new validationError("input must be chrachters");
  }

  return "input is valid";
}

function handleInput(input: string) {
  try {
    let result = validateInput(input);
    console.log(input);
  } catch (error) {
    if (error instanceof validationError) {
      console.log(`validation Error : ${error.message}`);
    } else {
      console.error(`Unexpected Error : ${(error as Error).message}`);
    }
  }
}

let inp = "hello";
let inp1 = "123";
let inp2 = "@kh";

console.log(handleInput(inp1));
