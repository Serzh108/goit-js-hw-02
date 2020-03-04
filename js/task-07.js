"use strict";
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
let message;

const isLoginValid = function(login) {  
  return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function(allLogins, login) {
  return allLogins.includes(login) ? false : true;
};

const addLogin = function(allLogins, login) {
 if (!isLoginValid(login)) {
  message = 'Ошибка! Логин должен быть от 4 до 16 символов.';
  return message;
 } else if (!isLoginUnique(allLogins, login)) {
  message = 'Такой логин уже используется!';
  return message;
 }  else {
  allLogins.push(login);
  message = 'Логин успешно добавлен!';
  return message;
 }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'