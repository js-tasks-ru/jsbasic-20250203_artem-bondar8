function highlight(table) {
  const trs = table.querySelectorAll('tr');
  
  trs.forEach( ( tr ) => {
    const cells = tr.querySelectorAll('td');

    applyAvailabilityClass(tr, cells);
    applyGenderClass(tr, cells);
    strikeThroughForUnderage(tr, cells);
  });

  function applyAvailabilityClass(tr, cells) {
    const arrAvailableAttribute = [];

    cells.forEach( ( td ) => {
      arrAvailableAttribute.push(td.getAttribute('data-available'));
    });

    if ( arrAvailableAttribute.includes('true') ) {
      tr.classList.add('available');
      return;
    } else if ( arrAvailableAttribute.includes('false') ) {
      tr.classList.add('unavailable');
      return;
    };

    tr.setAttribute('hidden', 'true');
  };

  function applyGenderClass(tr, cells) {
    cells.forEach( ( td ) => {
      if ( td.textContent === 'm' ) {
        tr.classList.add('male');
      } else if ( td.textContent === 'f' ) {
        tr.classList.add('female');
      };
    });
  };

  function strikeThroughForUnderage(tr, cells) {
    cells.forEach( ( td ) => {
      let tdToNumber = Number(td.textContent);

      if ( !Number.isNaN(tdToNumber) && tdToNumber < 18) {
        tr.style.textDecoration = 'line-through';
      };
    });
  };
};