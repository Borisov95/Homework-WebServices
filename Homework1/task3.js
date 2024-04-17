const { studentsData } = require("./index");

// Task 3: Find best student (one) from FINKI

// const bestStudent = studentsData
// .filter((student) => student.fakultet === "FINKI")
// .find((el) => el.prosek > 9.9);

// console.log(bestStudent);

const finkiStudents = studentsData
.filter(student => student.fakultet === "FINKI")
.reduce((acc, current) => acc.prosek > current.prosek ? acc : current)

console.log(finkiStudents);