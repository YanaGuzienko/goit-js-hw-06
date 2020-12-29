'use strict';
import users from './users.js';
// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
  const userFriend = users.reduce(function (name, user) {
    if (user.friends.includes(friendName)) {
      name.push(user.name);
    }
    return name;
  }, []);
  return userFriend;
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
