'use strict';

const https = require('https');

const fetch = async (url) => new Promise((resolve, reject) => {
  https.get(url, async (res) => {
    const code = res.statusCode;
    if (code !== 200) return reject(new Error(`HTTP status code ${code}`));
    res.on('error', reject);
    const chunks = [];
    for await (const chunk of res) chunks.push(chunk);
    const json = Buffer.concat(chunks).toString();
    try {
      const object = JSON.parse(json);
      resolve(object);
    } catch (error) {
      return reject(error);
    }
  });
});

module.exports = { fetch };
