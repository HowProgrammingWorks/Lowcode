'use strict';

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
console.log(purchase);

const keys = Object.keys(purchase);
console.log({ keys });

const entries = Object.entries(purchase);
console.log({ entries });
