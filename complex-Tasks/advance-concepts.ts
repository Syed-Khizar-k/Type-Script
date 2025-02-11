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
    n * 3;
}

//never

//never is used somewhere when we have to passthrough an error or some data in a function we need never that if system occurs any of the error it will also give any output that does not return any value

function hello(nan: any): never {
  throw new Error("hellow");
}
