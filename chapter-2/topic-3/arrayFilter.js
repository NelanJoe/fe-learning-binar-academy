const students = [
  {
    name: "Fatwa",
    class: "FEJS-3",
    bornIn: 2003,
  },
  {
    name: "Susan",
    class: "FEJS-3",
    bornIn: 2002,
  },
  {
    name: "Nisa",
    class: "FEJS-3",
    bornIn: 2003,
  },
  {
    name: "Budi",
    class: "FEJS-3",
    bornIn: 2001,
  },
  {
    name: "Agus",
    class: "FEJS-3",
    bornIn: 2004,
  },
];

const filteredStudent = students.filter((student) =>
  student.bornIn === 2003 ? student : ""
);

console.log(filteredStudent);
