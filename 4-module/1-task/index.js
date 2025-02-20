function makeFriendsList(friends) {
  const ul = document.createElement('ul');
  
  friends.forEach( (user) => {
    const li = document.createElement('li');
    li.textContent = `${user.firstName} ${user.lastName}`;
    ul.append(li);
  });

  return ul;
};