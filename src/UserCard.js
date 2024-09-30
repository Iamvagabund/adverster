export default class UserCard {
  constructor(user) {
    this.user = user;
  }

  render() {
    const card = document.createElement('div');
    card.classList.add('user-card');
    card.innerHTML = `
      <h3>${this.user.name}</h3>
      <p>${this.user.email}</p>
      <p>${this.user.phone}</p>
    `;
    return card;
  }
}
