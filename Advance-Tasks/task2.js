/*2. Generic Functions and Interfaces */
//Write a generic function to filter an array of any type.
function filterFunc(arr, filterFn) {
    return arr.filter(filterFn);
}
var numbers = [1, 2, 3, 4, 5, 5, 6, 7, 8];
var evenNumbers = filterFunc(numbers, function (num) { return num % 2 === 0; });
console.log(evenNumbers);
