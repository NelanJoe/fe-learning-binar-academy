const yearNow = new Date().getFullYear();

const students = [
  {
    name: "Fatwa",
    class: "FEJS-3",
    bornIn: 2002,
    getAge: function () {
      return yearNow - this.bornIn;
    },
  },
  {
    name: "Susan",
    class: "FEJS-3",
    bornIn: 2003,
    getAge: function () {
      return yearNow - this.bornIn;
    },
  },
];

for (const student of students) {
  console.log("Name: ", student.name);
  console.log("Name: ", student.class);
  console.log("Age: ", student.getAge());
  console.log();
}
