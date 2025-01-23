//TASK NO 1 :
/*Working with Advanced Types
Enum and Union Types:
Create a program where you:
Use an enum to represent different statuses of a task (e.g., Pending, InProgress, Completed).
Use union types for a variable that can either be a string or number, explaining its purpose with comments.
 */

enum statuse {
  pending = "pending",
  inProgress = "In-Progress",
  completed = "completed",
}

interface subtask {
  id: number | string;
  name: string;
  status: statuse;
}

let users1: subtask = {
  id: 192913,
  name: "syed khizar",
  status: statuse.completed,
};
let users2: subtask = {
  id: "albert09",
  name: "albert",
  status: statuse.inProgress,
};
// console.log(user1.status);
// console.log(user2.status);

//TASK NO 2 :
/*Utility Types
Create an object with:
Optional properties using Partial.
Read-only properties using Readonly.
Demonstrate modifying an object before and after applying these utility types.
 */

interface bookdata {
  readonly title: string;
  pages: number;
  reviews: number;
}

let book1: Partial<bookdata> = {
  title: "doctor",
  pages: 417,
};

function updateProperties(book: Partial<bookdata>, update: Partial<bookdata>) {
  return { ...book, ...update };
}

book1 = updateProperties(book1, { pages: 315, reviews: 3.4 });
console.log(book1);
