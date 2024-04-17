const { studentsData } = require("../task2/index");


//Task 5: Podredete gi gradovite spored nivnite proseci, opagacki

const poGrad = {}

for (let student of studentsData) {
    if (poGrad[student.grad]) {
        poGrad[student.grad].push(student);
    } else {
        poGrad[student.grad] = [student];
    }
}
// console.log(poGrad)

const gradovi = [];

for (let grad in poGrad) {
    const studentiVoGrad = poGrad[grad];
    const prosekPoGrad = studentiVoGrad.reduce((sum, stud) => sum + stud.prosek, 0) / studentiVoGrad.length;
    gradovi.push({ grad, prosek: prosekPoGrad });
}

gradovi.sort((a, b) => b.prosek - a.prosek);

console.log(gradovi);
