//TASK NO 1 :
/*Working with Advanced Types
Enum and Union Types:
Create a program where you:
Use an enum to represent different statuses of a task (e.g., Pending, InProgress, Completed).
Use union types for a variable that can either be a string or number, explaining its purpose with comments.
 */

enum statuses {
  pending = "pending",
  inProgress = "In-Progress",
  completed = "completed",
}

interface subtask {
  id: number | string;
  name: string;
  status: statuses;
}

let user1: subtask = {
  id: 192913,
  name: "syed khizar",
  status: statuses.completed,
};
let user2: subtask = {
  id: "albert09",
  name: "albert",
  status: statuses.inProgress,
};
console.log(user1.status);
console.log(user2.status);
