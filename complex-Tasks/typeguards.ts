/*
Write a function using custom type guards to:
Distinguish between two object types (e.g., Student and Teacher) and handle each type differently.
Example: Print specific details about a Student (grade, subjects) and a Teacher (department, courses).

*/
interface Student {
  name: string;
  rollNum: number;
  grade: string;
  subject: string;
}

interface Teacher {
  name: string;
  id: number;
  department: string;
  courses: string;
}

let students: Student[] = [];
let teachers: Teacher[] = [];

function addDetailsS(student: Student): void {
  students.push(student);
}

function addDetailsT(teacher: Teacher): void {
  teachers.push(teacher);
}

addDetailsS({ name: "syed khizar", rollNum: 1, grade: "A", subject: "BS-SE" });
addDetailsS({ name: "usama ", rollNum: 2, grade: "B", subject: "BS-CS" });

addDetailsT({
  name: "prof.Rana",
  id: 1,
  department: "Engineering",
  courses: "BS-SE",
});
addDetailsT({
  name: "Prof.Usman ",
  id: 2,
  department: "Science",
  courses: "BS-CS",
});

function getDeatailsS(students: Student[], rolnum: number) {
  students.forEach((student) => {
    if (student.rollNum === rolnum) {
      console.log(
        `student's grade is ${student.grade} and students's subject is ${student.name}`
      );
    }
  });
}
console.log(getDeatailsS(students, 2));

function getDeatailsT(teachers: Teacher[], techId: number) {
  teachers.forEach((teachers) => {
    if (teachers.id === techId) {
      console.log(
        `teacher's department is ${teachers.department} and teacehr's course  is ${teachers.courses}`
      );
    }
  });
}
console.log(getDeatailsT(teachers, 2));
