'use strict';

const { fetch } = require('metautil');

const API_EXCHANGE = {
  host: 'openexchangerates.org',
  path: '/api/latest.json?app_id=',
  key: '1f43ea96b1e343fe94333dd2b97a109d',
};

const getRate = async (currency) => {
  const { host, path, key } = API_EXCHANGE;
  const url = `https://${host}/${path}${key}`;
  const data = await fetch(url);
  const rate = data.rates[currency];
  return rate;
};

module.exports = { getRate };
