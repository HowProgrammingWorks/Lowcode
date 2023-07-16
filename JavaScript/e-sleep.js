'use strict';

const now = (date = new Date()) => date.getTime();

const sleep = (interval) => {
  const end = now() + interval;
  while (now() < end);
};

console.log('Sleep 5 seconds');
sleep(5000);
console.log('Done');
