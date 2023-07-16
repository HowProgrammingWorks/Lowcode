'use strict';

let i = 0;

while (i < 10) {
  i++;
  console.log('Hello', i);
  if (i === 5) break;
  console.log('World');
}

console.log('End');
