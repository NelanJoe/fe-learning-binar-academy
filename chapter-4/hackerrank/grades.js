const grades = [73, 67, 38, 33];

const result = grades.map((grade) => {
  let finalGrade = grade;

  if (grade >= 38) {
    const diff = 5 - (grade % 5);
    if (diff < 3) {
      finalGrade = grade + diff;
    }
  }

  return finalGrade;
});

console.log("Result:", result);
