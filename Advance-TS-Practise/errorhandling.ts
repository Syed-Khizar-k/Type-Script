/*
Write a function to:
Validate user input (e.g., a function that takes a string input and ensures it only contains alphabets).
Throw a custom error for invalid inputs.
Use a try-catch block to display user-friendly error messages.
 */

try {
  function UserInput(input: string): string {
    let flag = /^[A-Za-z]+$/;
    if (!flag.test(input)) {
      throw new Error("Incorrect Format");
    } else {
      return "Matched";
    }
  }
  console.log(UserInput("h"));
  console.log(UserInput("ABDj"));
  console.log(UserInput("123"));
} catch (error) {
  throw new Error("Error : Enter only Alphabets ");
}
