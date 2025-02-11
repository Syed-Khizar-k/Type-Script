//1:Generic Functions and Interfaces
/*
1.1: Write a generic function to:
Transform an array of any type into another type using a transformation function.
Example: Convert an array of numbers to strings or an array of objects to just their names.

*/
function typeChanger(array: Array<any>): string {
  return array.toString();
}
let values = [1, 2, 3];
console.log(typeChanger(values));

/*
Create a generic interface for an object with dynamic properties:
Example: An interface for a configuration object where keys are strings and values can be of different types (string, number, or boolean).
*/
interface GenericObj<T> {
  [key: string]: T;
}

let booksData: GenericObj<string> = {
  name: "POWER",
  title: "learn to Grow",
};
