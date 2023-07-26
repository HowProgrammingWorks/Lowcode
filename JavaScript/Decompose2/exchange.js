'use strict';

module.exports = (config) => {

  const getRate = async (currency) => {
    const { host, path, key } = config;
    const url = `https://${host}/${path}${key}`;
    const res = await fetch(url);
    const data = await res.json();
    const rate = data.rates[currency];
    return rate;
  };

  return { getRate };
};
