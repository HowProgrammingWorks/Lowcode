'use strict';

const config = require('./config.js');
const domain = require('./domain.js');
const exchange = require('./exchange.js');
exchange.config = config;

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

const main = async () => {
  try {
    console.log(purchase);
    const bill = domain.calculateTotal(purchase);
    console.log(bill);
    domain.validateExpenses(bill.expenses);
    const rate = await exchange.getRate('UAH');
    const uah = bill.total * rate;
    console.log(uah);
  } catch (err) {
    console.error(err);
  }
};

main();
