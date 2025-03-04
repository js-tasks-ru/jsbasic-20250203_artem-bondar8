export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.#render();
    this.#attachEventListeners();
  };

  #render() {
    const table = document.createElement('table');
    
    table.innerHTML = `
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${this.rows.map(user => `
          <tr>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>${user.salary}</td>
            <td>${user.city}</td>
            <td><button class="remove-button">X</button></td>
          </tr>
        `).join('')}
      </tbody>
    `;

    return table;
  };

  #attachEventListeners() {
    this.elem.addEventListener('click', (event) => {
      if (event.target.classList.contains('remove-button')) {
        event.target.closest('tr').remove();
      };
    });
  };
};