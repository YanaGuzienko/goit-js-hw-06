'use strict';
'use strict';

import users from './users.js';

// Получить массив только неактивных пользователей(поле isActive).

const getInactiveUsers = users => {
  const usersNotActive = users.filter(user => !user.isActive);
  return usersNotActive;
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
