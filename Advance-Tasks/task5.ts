/*1. Advanced Concepts
Create a TypeScript file demonstrating:
Type Assertions with examples of as and angle bracket syntax.
Difference between any and unknown types with comments explaining the use cases.
 */

let variable: unknown = "hello";

//finding the length by using as keyword :

let strLength = (variable as string).length;
console.log(strLength);

//finding the length by using angle bracket :

let strLength1 = (<string>variable).length;

console.log(strLength1);

//difference between any and unknown:
//any keyword  works without any type safety for example i declared the number with any type we can perform any function on it without type checking errors
//ANY :
let var1: any = 12;
//as i declared the number but i am able to use .length operation on it that is bad for the typesafety
var1.length;

//UNKNOWN:
//unknown is the keyword that is usefull and full safe as it works with type safety and work with giving errors on value related operation
let var2: unknown = 12;
// as i have declared the variable as number and give the type as unknow and perform the .length operation it gives me the error on runtime that this is not performable on number type as it smartly asserted the type as number and i got error on run time

// var2.length; //error is not valid on number

/*
2. Error Handling
Write a TypeScript function to:
Validate input data using type guards.
Throw a custom error if the validation fails.
Use a try-catch block to handle errors gracefully.*/

interface userdata {
  name: string;
  age: number;
}

function isUser(input: unknown): input is userdata {
  return (
    typeof input === "object" &&
    input !== null &&
    typeof (input as userdata).name === "string" &&
    typeof (input as userdata).age === "number"
  );
}
function validateInput(input: any): input is userdata {
  if (!isUser(input)) {
    console.log("error");
  }
  return input;
}

function processInput(input: unknown): void {
  try {
    let validatedInput = validateInput(input);
  } catch (error) {
    console.log("there is error");
  }
}

let fist = { name: "syed khizar", age: 12 };

let fist1 = { name: "syed khizar", age: "k" };
processInput(fist1);
