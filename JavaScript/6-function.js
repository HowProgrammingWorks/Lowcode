'use strict';

const total = (prices) => {
  let amount = 0;
  for (const price of prices) {
    amount += price;
  }
  return amount;
};

const goodsPrices = [1500, 25, 100, 10];

const amount = 100;
console.log({ amount }); // выводит 100
{
  const amount = total(goodsPrices);
  console.log({ amount }); // выводит 1635
}
console.log({ amount }); // выводит 100
