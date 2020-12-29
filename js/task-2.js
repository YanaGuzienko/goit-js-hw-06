'use strict';

import users from './users.js';
// Получить массив объектов пользователей по цвету глаз(поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
  const usersEyes = users.filter(user => user.eyeColor === color);
  return usersEyes;
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
