'use strict';

console.log(`
  Iterate array elements with for..of
`);

const basket = [
  { name: 'Laptop',  price: 1500 },
  { name: 'Mouse',  price: 25 },
  { name: 'Keyboard',  price: 100 },
  { name: 'HDMI',  price: 10 },
];

for (const { name, price } of basket) {
  console.log(`Price of ${name} is ${price}`);
}

console.log(`
  Iterate object/recod fields with for..of
`);

const electronics = {
  Laptop: 1500,
  Mouse: 25,
  Keyboard: 100,
  HDMI: 10,
};

for (const name of Object.keys(electronics)) {
  const price = electronics[name];
  console.log(`Price of ${name} is ${price}`);
}
