const fs = require("fs");

console.log("Start....");
fs.readFile("./data/students.json", "utf-8", (error, data) => {
  if (error) {
    throw new Error(error);
  }

  console.log(data);

  fs.readFile("./data/try.json", "utf-8", (error, data) => {
    if (error) {
      throw new Error(error);
    }

    console.log(data);

    console.log("End....");
  });
});
