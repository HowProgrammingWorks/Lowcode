'use strict';

// Структура данных: объект, значения его ключей - массивы объектов
const purchase = {
  Electronics: [
    { name: 'Laptop', price: 1500 },
    { name: 'Keyboard', price: 100 },
    { name: 'HDMI cable', price: 10 },
  ],
  Textile: [
    { name: 'Bag', price: 50 },
  ],
};

// Чтение ключа объекта
const electronics = purchase.Electronics;
console.log(electronics);

// Чтение ключа объекта синтаксисом ассоциативного массива
const textile = purchase['Textile'];
console.log(textile);

// Чтение элемента массива по индексу
const bag = textile[0];
console.log(bag);

// Сложное обращение к структуре данных
const price = purchase['Electronics'][2].price;
console.log(price);

// Примеры массива, содержащего два вложенных массива
// первый с числами, а второй со строками
console.log([[1, 2, 3], ['a', 'b', 'c']]);

// Сериализация структуры
const json = JSON.stringify(purchase);
console.log(json);
// и десериализация
const obj = JSON.parse(json);
console.log(obj);
