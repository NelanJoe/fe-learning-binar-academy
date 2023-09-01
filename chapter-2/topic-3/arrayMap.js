// Array numbers<Numbers>
const numbers = [1, 2, 3, 4, 5, 6];
const mutatedItems = numbers.map((number) => {
  return number * 2;
});

console.log("Result mutated array with array map: ", mutatedItems);

// map with array of object string
const students = [
  {
    name: "Putra",
    bornIn: 2003,
  },
  {
    name: "Andre",
    bornIn: 2002,
  },
];

// Calculate age of every student
const yearNow = new Date().getFullYear();
const studentsWithAge = students.map((student) => {
  const age = yearNow - student.bornIn;
  return {
    ...student,
    age,
  };
});

console.log(studentsWithAge);

let student = {
  name: "Alvan",
  bronIn: 2002,
};

student = {
  ...student,
  bornIn: 2001,
  age: new Date().getFullYear() - 2001,
};

console.log(student);
