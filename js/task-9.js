'use strict';
import users from './users.js';
// Массив имен(поле name) людей,
// отсортированных в зависимости от количества их друзей(поле friends)

const getNamesSortedByFriendsCount = users => {
  users.sort(function (a, b) {
    return a.friends.length - b.friends.length;
  });

  const nameOfSort = users.map(user => user.name);

  return nameOfSort;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
