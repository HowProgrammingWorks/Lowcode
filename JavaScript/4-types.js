'use strict';

const values = { // объект
  name: 'Mouse', // строка
  price: 25, // число
  stock: false, // логическое значение
  avg: (a, b) => (a + b) / 2n, // функция
  reference: null,
  primitive: undefined,
  numbers: [NaN, Infinity], // массив (тоже объект)
};

// Перебираем ключи объект и выводим типы значений
for (const key in values) {
  const value = values[key];
  const type = typeof value;
  console.log({ key, value, type });
}
