function makeDiagonalRed(table) {
  const trs = table.querySelectorAll('tr');

  trs.forEach( ( tr, i ) => {
    let td = tr.children[i];
    td.style.backgroundColor = 'red';
  });
};