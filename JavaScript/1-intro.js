'use strict';

const MAX_PURCHASE = 2000;

const calculateSubtotal = (goods) => {
  let amount = 0;
  for (const item of goods) {
    if (item.price < 0) throw 'Negative price';
    amount += item.price;
  }
  return amount;
};

const calculateTotal = (order) => {
  const expenses = new Map();
  let total = 0;
  for (const groupName in order) {
    const goods = order[groupName];
    const amount = calculateSubtotal(goods);
    total += amount;
    expenses.set(groupName, amount);
  }
  return { total, expenses };
};

const validateExpenses = (items) => {
  for (const [groupName, total] of items) {
    if (total > MAX_PURCHASE) throw `${groupName} total is above the limit`;
  }
};

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

const API_EXCHANGE = {
  host: 'openexchangerates.org',
  path: '/api/latest.json?app_id=',
  key: '1f43ea96b1e343fe94333dd2b97a109d',
};

const getRate = async (currency) => {
  const { host, path, key } = API_EXCHANGE;
  const url = `https://${host}/${path}${key}`;
  const res = await fetch(url);
  const data = await res.json();
  const rate = data.rates[currency];
  return rate;
};

const main = async () => {
  try {
    console.log(purchase);
    const bill = calculateTotal(purchase);
    console.log(bill);
    validateExpenses(bill.expenses);
    const rate = await getRate('UAH');
    const uah = bill.total * rate;
    console.log(uah);
  } catch (err) {
    console.error(err);
  }
};

main();
