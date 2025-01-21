/*2. Generic Functions and Interfaces */

//2.1: Write a generic function to filter an array of any type.

function filterFunc<Type>(
  arr: Type[],
  filterFn: (item: Type) => boolean
): Type[] {
  return arr.filter(filterFn);
}

let numbers = [1, 2, 3, 4, 5, 5, 6, 7, 8];
let evenNumbers = filterFunc(numbers, (num) => num % 2 === 0);
console.log(evenNumbers);

//2.2 : Create a generic interface for a KeyValuePair with a key-value pair structure.

interface Items<k, v> {
  name: k;
  age: v;
}

let data: Items<string, number> = {
  name: "syed khizar",
  age: 19,
};
