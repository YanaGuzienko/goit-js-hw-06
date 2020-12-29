'use strict';
import users from './users.js';

// Получить общую сумму баланса(поле balance) всех пользователей.

const calculateTotalBalance = users => {
  const total = users.reduce(function (accumulator, user) {
    return accumulator + user.balance;
  }, 0);
  return total;
};

console.log(calculateTotalBalance(users)); // 20916
