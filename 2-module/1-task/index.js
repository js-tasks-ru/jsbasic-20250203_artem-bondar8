function sumSalary(salaries) {
  let countSalaries = 0;

  for (let key in salaries) {
    let value = salaries[key];

    if (isFinite(value)) countSalaries += value;
  };
  
  return countSalaries;
};