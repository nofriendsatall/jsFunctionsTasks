import _ from 'lodash';
import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
const getFreeDomainsCount = (emails) => {
  const freeDomains = new Set(freeEmailDomains);
  return emails.reduce((acc, email) => {
    const domain = email.split('@').pop();
    if (freeDomains.has(domain)) {
      acc[domain] = (acc[domain] || 0) + 1;
    }
    return acc;
  }, {});
};

export default getFreeDomainsCount;

// END