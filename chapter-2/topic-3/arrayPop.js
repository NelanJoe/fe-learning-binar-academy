const fruits = ["Apple", "Orange", "Durian"];
fruits.push("Tomato"); // add more item in the end of array

console.log("Data fruits:", fruits);

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

// Array pop method to remove last index of array
students.pop();

console.log("Result with pop method:", students);
