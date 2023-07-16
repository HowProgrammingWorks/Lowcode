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

// Get array element by index

console.log(purchase.Electronics[0]);
console.log(purchase.Electronics[1]);
console.log(purchase.Electronics[2]);
console.log(purchase.Electronics[3]);

// Get array element using .at method by index

console.log(purchase.Electronics.at(0));
console.log(purchase.Electronics.at(1));
console.log(purchase.Electronics.at(2));
console.log(purchase.Electronics.at(3));

// Get array element using .at with negative index

console.log(purchase.Electronics.at(-1));
console.log(purchase.Electronics.at(-2));
console.log(purchase.Electronics.at(-3));
console.log(purchase.Electronics.at(-4));

// Union

console.log([
  ...purchase.Electronics,
  ...purchase.Textile,
]);

// Add mouse

purchase.Electronics.push({ name: 'Mouse', price: 25 });
console.log(purchase.Electronics);

// Take element from the tail

const item = purchase.Electronics.pop();
console.log(item);
console.log(purchase.Electronics);

// Find element

const prices = [10, 1500, 100, 50];
const price = prices.find((item) => item > 100);
console.log({ price });
if (prices.includes(100)) console.log('100 is there');

// Other Array methods
{
  const names = ['Laptop', 'Keyboard', 'Mouse'];
  console.log(names.join('; '));
  const index = names.indexOf('Mouse');
  console.log({ index });
}
// Filter elements

const filtered = purchase.Electronics.filter((item) => item.price > 50);
console.log({ filtered });
