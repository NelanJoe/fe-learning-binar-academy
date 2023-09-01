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

// Array shift method to remove first index of array
students.shift();

console.log("Result with shift method:", students);
