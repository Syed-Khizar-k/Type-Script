//Exploring Advanced Concepts

/*
Difference between any, unknown, and never with practical examples.
*/
let userData: any = {
  name: "syed khizar",
};

userData.age = 19;
//any is used to passaway from compiler without anytype checking and we can change it anywhere we wants
userData = 91;
console.log(userData);

//UNKNOWN :
//unknown is more safe than any as it also typechecks that all the operations are not performed on unknown type
function add(n: unknown) {
  // n * 3;
}

//never

//never is used somewhere when we have to passthrough an error or some data in a function we need never that if system occurs any of the error it will also give any output that does not return any value

function hello(nan: any): never {
  throw new Error("hellow");
}
/*
Use a type assertion to convert a variable from unknown to a specific type and explain why it's needed.
Example: Write a function that uses unknown as the parameter type and uses type guards and assertions to process it safely.

*/
//this funciton is made to safely check the type of the input and then operate functions based on their datatype
function safeInput(input: unknown): string {
  if (typeof input === "string") {
    return input.toLocaleUpperCase();
  } else if (typeof input === "number") {
    return `number: ${(input as number).toFixed(2)}`;
  } else if (Array.isArray(input)) {
    return `Array : ${(input as any[]).length}`;
  } else {
    return "Un Supported File";
  }
}

console.log(safeInput("syed khizar"));
console.log(safeInput(6.9248845));
console.log(safeInput([1, 2, 3, 4, 5, "syed"]));
console.log(safeInput({ hello: "s" }));
