'use strict';

import users from './users.js';

// Получить массив имен пользователей по полу(поле gender).

const getUsersWithGender = (users, gender) => {
  const usersGender = users.reduce(function (name, user) {
    if (user.gender === gender) {
      name.push(user.name);
    }
    return name;
  }, []);
  return usersGender;
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
