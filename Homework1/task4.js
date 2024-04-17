const { studentsData } = require("../task2/index");

// Task 4: Find worst student (one) from Bitola

const studentFromBitola = studentsData
.filter(student => student.grad === "Bitola").reduce((acc, curr) => acc.prosek < curr.prosek ? acc : curr);

// console.log(studentFromBitola);