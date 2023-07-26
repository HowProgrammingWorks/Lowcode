'use strict';

const exchange = {};

exchange.getRate = async (currency) => {
  const { host, path, key } = exchange.config;
  const url = `https://${host}/${path}${key}`;
  const res = await fetch(url);
  const data = await res.json();
  const rate = data.rates[currency];
  return rate;
};

module.exports = exchange;
