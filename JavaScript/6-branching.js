'use strict';

const calculateSubtotal = (goods) => {
  let amount = 0;
  for (const item of goods) {
    if (item.price < 0) throw 'Negative price';
    else amount += item.price;
  }
  return amount;
};

const goods = [
  { name: 'Laptop',  price: 1500 },
  { name: 'Mouse',  price: 25 },
  { name: 'Keyboard',  price: 100 },
  { name: 'HDMI cable',  price: 10 },
];

const total = calculateSubtotal(goods);
console.log({ goods, total });
