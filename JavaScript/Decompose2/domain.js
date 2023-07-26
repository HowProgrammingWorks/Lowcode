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

module.exports = { calculateSubtotal, calculateTotal, validateExpenses };
