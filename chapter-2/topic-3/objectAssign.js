const student = {
  name: "Fatwa",
  class: "FEJS-3",
  bornIn: 2003,
};

const newStudent = Object.assign({ age: 20 }, student);
console.log(newStudent);
