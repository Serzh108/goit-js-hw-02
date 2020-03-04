"use strict";
let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число:");  
    if (Number.isNaN(Number(input))) {
        alert("Введено не число!");
    } else if (input !== null) {
        numbers.push(input);  
    }
}while(input !== null);

if (numbers.length > 0) {
  for (const number of numbers) {
    if (!Number.isNaN(Number(number))) {
      total = total + Number(number);
    }
  }
}

console.log(numbers); //для проверки
console.log(`Общая сумма чисел равна ${total}`);