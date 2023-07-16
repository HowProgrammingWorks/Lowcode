'use strict';

let i = 0;

do {
  console.log('Hello', i);
  if (i === 5) {
    i++;
    continue;
  }
  console.log('World');
  i++;
} while (i < 10);

console.log('End');
