import UserCard from './UserCard';

export default class UserList {
  constructor(container) {
    this.container = container;
    this.users = [];

    this.loader = document.createElement('div');
    this.loader.classList.add('loader');
    this.container.appendChild(this.loader);

    this.noResultsMessage = document.createElement('div');
    this.noResultsMessage.classList.add('no-results');
    this.noResultsMessage.innerText = 'No users found matching your criteria.';
    this.noResultsMessage.style.display = 'none';
  }

  async fetchUsers() {
    try {
      this.showLoader();
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      this.users = await response.json();
      this.hideLoader();
      this.render();
    } catch (error) {
      console.error('Error fetching users:', error);
      this.hideLoader();
    }
  }

  showLoader() {
    this.loader.style.display = 'block';
    this.noResultsMessage.style.display = 'none';
  }

  hideLoader() {
    this.loader.style.display = 'none';
  }

  render() {
    this.container.innerHTML = '';
    this.container.appendChild(this.noResultsMessage);

    if (this.users.length > 0) {
      this.noResultsMessage.style.display = 'none';
      this.users.forEach(user => {
        const userCard = new UserCard(user);
        this.container.appendChild(userCard.render());
      });
    } else {
      this.noResultsMessage.style.display = 'block';
    }
  }

  filterUsers(criteria, selectedField) {
    const filteredUsers = this.users.filter(user =>
      user[selectedField] && user[selectedField].toString().toLowerCase().includes(criteria.toLowerCase())
    );

    this.container.innerHTML = '';
    this.container.appendChild(this.noResultsMessage);
    if (filteredUsers.length > 0) {
      this.noResultsMessage.style.display = 'none';
      filteredUsers.forEach(user => {
        const userCard = new UserCard(user);
        this.container.appendChild(userCard.render());
      });
    } else {
      this.noResultsMessage.style.display = 'block';
    }
  }
}
