//1:Working with Advanced Types
/*
1.1 : Create a program where you:
Use an enum to represent different statuses of a task (e.g., Pending, InProgress, Completed).
Use union types for a variable that can either be a string or number, explaining its purpose with comments.

*/

enum statuses {
  Pending = "pending",
  InProgress = "InProgress",
  Completed = "completed",
}
//here union type is implemented because the user can provide the id in the form of numbers or their username therefor , union operator is used
interface User {
  id: number | string;
  name: string;
  age: number;
}

let user: User = {
  id: 138249,
  name: "syed khizar",
  age: 19,
};

let user1: User = {
  id: "skh",
  name: "usama",
  age: 22,
};

/*Utility Types:
Create an object with:
Optional properties using Partial.
Read-only properties using Readonly.
Demonstrate modifying an object before and after applying these utility types.
*/
//by using partial all the properties are optional we can either user them or reject them in new object
let dataFields: Partial<User> = {
  name: "syed khizar",
  age: 19,
};

let fixedData: Readonly<User> = {
  id: 1212,
  name: "syed khizar",
  age: 19,
};
//this is giving us error because readonly properties can not be used
// fixedData.name = "usama";
