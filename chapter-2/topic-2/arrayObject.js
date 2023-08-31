const students = [
  {
    name: "Putra",
    address: [
      {
        city: "Samarinda",
        province: "East Borneo",
      },
    ],
  },
  {
    name: "Barizi",
    address: [
      {
        city: "Bangkalan",
        province: "East Java",
      },
    ],
  },
  {
    name: "Nelan",
    address: [
      {
        city: "Bogor",
        province: "West Java",
      },
      {
        city: "Depok",
        province: "West Java",
      },
    ],
  },
];

// console.log(`${students[0].name} is from ${students[0].address[0].city}`);
// console.log(
//   `Result: ${students[2].name} is from ${students[2].address[1].city}`
// );

// Destructuring with in 3 Object
const [putra, barizi, nelan] = students;

/**
 * RESULTS
 */
console.log(`${putra.name} is from ${putra.address[0].city}`);
console.log(`${barizi.name} is from ${barizi.address[0].city}`);
console.log(
  `${nelan.name} is from ${nelan.address[0]?.city} & ${nelan.address[1]?.city}`
);
