const { promisify } = require("util");
const fs = require("fs");
const readFile = promisify(fs.readFile);

const readFileJSON = async () => {
  try {
    const [studentsData, tryData] = await Promise.all([
      readFile("./data/students.json", "utf-8"),
      readFile("./data/try.json", "utf-8"),
    ]);

    console.log("Students Data:", studentsData);
    console.log("Try Data:", tryData);
  } catch (error) {
    throw new Error(error);
  }
};

const readFilePromise = () => {
  readFile("./data/students.json", "utf-8")
    .then((students) => {
      console.log("Students", students);

      return readFile("./data/try.json", "utf-8");
    })
    .then((tryData) => {
      console.log("Try Data", tryData);
    })
    .catch((err) => console.error(err));
};

readFileJSON();
readFilePromise();
