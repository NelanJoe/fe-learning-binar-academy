// Array push in array object
/**
 * Typed students<[{},{}]>
 */
const students = [
  {
    name: "Fatwa",
    class: "FEJS-3",
  },
  {
    name: "Susan",
    class: "FEJS-3",
  },
];

// Recomended to use push not manual
students.push({
  name: "Joko",
  class: "FEJS-3",
});

console.log(students);

// Array unshift method to add first index of array
students.unshift({
  name: "Nina",
  class: "FEJS-3",
});

console.log("Result with unshift method:", students);
