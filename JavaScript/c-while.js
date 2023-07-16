'use strict';

const sum = (...args) => {
  let value = 0;
  while (args.length > 0) {
    value += args.pop();
  }
  return value;
};


const res = sum(1, 2, 3, 4, 5);
console.log(res);
