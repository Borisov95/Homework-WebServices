const { studentsData } = require("../task2/index");

// Task 2: Get all students ascending by prosek

const studentProske = studentsData.sort((a, b) => a.prosek - b.prosek);

// console.log(studentProske);


