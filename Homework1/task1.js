const { studentsData } = require("../task2/index");

// Task 1: Find all students from SKopje and print their names


const studentsFromSkopje = studentsData
.filter(student => student.grad === "Skopje")
.forEach(student => console.log(student.ime));


// console.log(studentsFromSkopje);