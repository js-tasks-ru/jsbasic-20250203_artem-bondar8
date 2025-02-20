function showSalary(users, age) {
  const filteredUsers = users.filter( ( user ) => user.age <= age);
  const userSalaries = filteredUsers.map( ( user ) => `${user.name}, ${user.balance}`);
  const result = userSalaries.join('\n');

  return result;
};
