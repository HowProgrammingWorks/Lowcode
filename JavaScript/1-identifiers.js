'use strict';

const MAX_PURCHASE = 2000;

const total = (prices) => {
  let amount = 0;
  for (const price of prices) {
    amount += price;
  }
  return amount;
};

module.exports = { MAX_PURCHASE, total };
