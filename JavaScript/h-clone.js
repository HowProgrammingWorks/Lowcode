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

const basket = { ...purchase };
console.log({ basket });

const electronics = [...purchase.Electronics];
console.log({ electronics });
