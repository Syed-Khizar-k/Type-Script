/*
Create a mini application:
Scenario: Task Management System
1:Define interfaces for Task and User.
2:Use a generic class to manage a list of tasks for a user.
3:Include methods to add, remove, and filter tasks by status or priority.

*/
interface Task {
  id: number;
  title: string;
  description: string;
  status: "completed" | "pending" | "in-progress";
  priority: "low" | "medium" | "high";
}
interface User {
  id: number;
  name: string;
  email: string;
}

class TaskManager<T extends Task> {
  tasks: T[] = [];

  addTask(task: T): void {
    this.tasks.push(task);
  }

  removeTask(taskId: number): T[] {
    return (this.tasks = this.tasks.filter((task) => task.id !== taskId));
  }

  filterTask(status: Task["status"]): T[] {
    return this.tasks.filter((tasks) => tasks.status === status);
  }

  filterTaskPriority(priority: Task["priority"]): T[] {
    return this.tasks.filter((tasks) => tasks.priority === priority);
  }
}

let taskManager = new TaskManager<Task>();

taskManager.addTask({
  id: 1,
  title: "web",
  description: "develope html theme ",
  status: "pending",
  priority: "low",
});

taskManager.addTask({
  id: 2,
  title: "backEND",
  description: "develope backend theme ",
  status: "in-progress",
  priority: "high",
});

taskManager.addTask({
  id: 3,
  title: "deployment",
  description: "deploy the web on vercel ",
  status: "pending",
  priority: "medium",
});

console.log(`Filter BY Status : `, taskManager.filterTask("pending"));
console.log(`Filter By Priority : `, taskManager.filterTaskPriority("low"));
console.log(`Remaining Tasks: `, taskManager.removeTask(2));
