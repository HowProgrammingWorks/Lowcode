'use strict';

// Наша задача 20 коротких видео по 10-15 минут научиться читать и
// писать подобный простой код, сейчас попробуем просто прочитать его

// Импорт внешней библиотеки
// мы научимся устанавливать их чуть позже
const { fetch } = require('metautil');

// Константа, глобальная для всего файла
const MAX_PURCHASE = 2000;

// Функция принимает массив goods и возвращает сумму
const calculateSubtotal = (goods) => {
  let amount = 0; // переменная
  for (const item of goods) { // цикл для итерации по массиву
    if (item.price < 0) throw 'Negative price'; // исключение
    amount += item.price; // накапливаем сумму
  }
  return amount; // возвращаем сумму
};

const calculateTotal = (order) => {
  const expenses = new Map(); // создание хештаблицы
  let total = 0;
  for (const groupName in order) { // перебор ключей объекта
    const goods = order[groupName]; // чтение поля объекта
    const amount = calculateSubtotal(goods); // вызов функции
    total += amount;
    expenses.set(groupName, amount); // добавление в хештаблицу
  }
  return { total, expenses }; // возвращаем объект с двумя полями
};

const validateExpenses = (items) => {
  for (const [groupName, total] of items) { // цикл по хештаблице
    if (total > MAX_PURCHASE) throw `${groupName} total is above the limit`;
  }
};

// Структура данных: объект, значения его ключей - массивы объектов
const purchase = {
  Electronics: [
    { name: 'Laptop',  price: 1500 },
    { name: 'Mouse',  price: 25 },
    { name: 'Keyboard',  price: 100 },
    { name: 'HDMI cable',  price: 10 },
  ],
  Textile: [
    { name: 'Bag', price: 50 },
    { name: 'Mouse pad', price: 5 },
  ],
};

// Данные для получения курсов валют
const API_EXCHANGE = {
  host: 'openexchangerates.org',
  path: '/api/latest.json?app_id=',
  key: '1f43ea96b1e343fe94333dd2b97a109d',
};

// Асинхронная функция для получения курса валюты ко коду валюты
const getRate = async (currency) => {
  const { host, path, key } = API_EXCHANGE;
  const url = `https://${host}/${path}${key}`;
  const data = await fetch(url);
  const rate = data.rates[currency];
  return rate;
};

const main = async () => {
  // Блок для обработки исключений
  try {
    console.log(purchase); // вывод структуры в консоль
    const bill = calculateTotal(purchase); // подсчет чека
    console.log(bill);
    validateExpenses(bill.expenses); // проверка чека
    const rate = await getRate('UAH'); // получение курса гривны
    const uah = bill.total * rate; // перевод в гривны
    console.log(uah);
  } catch (err) {
    console.error(err); // вывод трассировки исключения
  }
};

main(); // Точка входа в программу
