'use strict';

const { purchase, calculateTotal, validateExpenses, getRate } = require('name');

(async () => {
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
})();
