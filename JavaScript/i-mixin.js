'use strict';

const basket = {
  Laptop: 1500,
  Keyboard: 100,
  HDMI: 10,
};

// Mixin: dynamically add field

basket['Mouse'] = 25;
console.log(basket);

// Add field by name

const key = 'Mouse';
basket[key] = 25;
console.log(basket);

// Delete field

delete basket['Keyboard'];
console.log(basket);

// Objects union
{
  const basket = { Laptop: 1500, Keyboard: 100 };
  const goods = { HDMI: 10, Mouse: 25 };
  const order = { ...basket, ...goods };
  console.log(order);
}

// Assemble from parts
{
  const basket = {
    Laptop: 1500,
    Keyboard: 100,
    Mouse: 25,
  };
  const order = { ...basket, HDMI: 10, Mouse: 20 };
  console.log(order);
}

// In a different order
{
  const basket = {
    Laptop: 1500,
    Keyboard: 100,
    Mouse: 25,
  };
  const order = { HDMI: 10, Mouse: 20, ...basket };
  console.log(order);
}

// Example: calculateTotal
{
  const calculateTotal = (obj) => {
    let total = 0;
    for (const key in obj) {
      total += obj[key];
    }
    return total;
  };

  const total = calculateTotal(basket);
  console.log({ total });
}

// Print nested structures
{
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
  console.dir(purchase, { depth: null });
  console.dir(purchase, { depth: 10 });
  console.log(JSON.stringify(purchase));
}
