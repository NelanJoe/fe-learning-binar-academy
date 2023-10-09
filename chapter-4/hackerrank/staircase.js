const number = 5;

// const staircase = (n) => {
//   for (let i = 0; i < n; i++) {
//     const result = Array(i + 1)
//       .fill("#")
//       .join("")
//       .padStart(n);

//     console.log(result);
//   }
// };

// staircase(number);

const staircase = (n) => {
  let triangleStr = "";
  let baris = "#";
  let i = 1;

  while (i <= n) {
    triangleStr += "\n" + baris;

    baris += "#";

    i++;
  }

  console.log(triangleStr);
};

staircase(number);
