const person = {
  name: "Budi",
  address: {
    city: "Karawang",
    province: "West Java",
  },
};
console.log(person);

// Adding data object
person.job = "Student";
console.log(person);

// Details
const personDetails = `${person.name} is from ${person.address.city}, ${person.address.province}`;
console.log("person detail:", personDetails);
