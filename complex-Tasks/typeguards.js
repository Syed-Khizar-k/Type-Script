var students = [];
var teachers = [];
function addDetailsS(student) {
    students.push(student);
}
function addDetailsT(teacher) {
    teachers.push(teacher);
}
addDetailsS({ name: "syed khizar", rollNum: 1, grade: "A", subject: "BS-SE" });
addDetailsS({ name: "usama ", rollNum: 2, grade: "B", subject: "BS-CS" });
addDetailsT({
    name: "prof.Rana",
    id: 1,
    department: "Engineering",
    courses: "BS-SE"
});
addDetailsT({
    name: "Prof.Usman ",
    id: 2,
    department: "Science",
    courses: "BS-CS"
});
function getDeatailsS(students, rolnum) {
    students.forEach(function (student) {
        if (student.rollNum === rolnum) {
            console.log("student's grade is ".concat(student.grade, " and students's subject is ").concat(student.name));
        }
    });
}
console.log(getDeatailsS(students, 2));
function getDeatailsT(teachers, techId) {
    teachers.forEach(function (teachers) {
        if (teachers.id === techId) {
            console.log("teacher's department is ".concat(teachers.department, " and teacehr's course  is ").concat(teachers.courses));
        }
    });
}
console.log(getDeatailsT(teachers, 2));
