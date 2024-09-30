import './styles.css';
import UserList from './UserList';
import Filter from './Filter';

const appContainer = document.getElementById('app');

appContainer.innerHTML = '';

const userListContainer = document.createElement('div');
userListContainer.setAttribute('id', 'user-list');
appContainer.appendChild(userListContainer);

const userList = new UserList(userListContainer);
const filter = new Filter(userList);

appContainer.insertBefore(filter.render(), userListContainer);

userList.fetchUsers();
