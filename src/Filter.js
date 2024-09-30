export default class Filter {
  constructor(userList) {
    this.userList = userList;

    this.select = document.createElement('select');
    this.select.innerHTML = `
      <option value="name">Name</option>
      <option value="email">Email</option>
      <option value="phone">Phone</option>
    `;

    this.input = document.createElement('input');
    this.input.placeholder = 'Enter value to filter...';

    this.input.addEventListener('input', (event) => {
      const selectedField = this.select.value;
      this.userList.filterUsers(event.target.value, selectedField);
    });
  }

  render() {
    const container = document.createElement('div');
    container.classList.add('filter-container');

    container.appendChild(this.select);
    container.appendChild(this.input);

    return container;
  }
}
