'use strict';

console.log(`
  Iterate object/recod fields with for..in
`);

const basket = {
  Laptop: 1500,
  Mouse: 25,
  Keyboard: 100,
  HDMI: 10,
};

for (const key in basket) {
  const price = basket[key];
  console.log(`Price of ${key} is ${price}`);
}

console.log(`
  Iterate object/record fields with for..of
`);

const electronics = {
  Laptop: 1500,
  Mouse: 25,
  Keyboard: 100,
  HDMI: 10,
};

for (const [name, price] of Object.entries(electronics)) {
  console.log(`Price of ${name} is ${price}`);
}
