'use strict';

// Константа верхнего уровня видимости
const MAX_PURCHASE = 2000; /* UPPER_SNAKE_CASE */

// Функция нахождения суммы элементов массива
// Имя calculateTotal - это lowerCamelCase или camelCase
const calculateTotal = (prices) => {
  let amount = 0; // переменная для суммы
  // Имя Array - это UpperCamelCase или PascalCase
  if (!Array.isArray(prices)) throw 'Array expected';
  for (const price of prices) { // цицл по массиву
    amount += price; // суммируем цены товаров
  }
  return amount; // возврат значения из функции
};

module.exports = { MAX_PURCHASE, calculateTotal };
