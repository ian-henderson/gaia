const { json, urlencoded } = require('body-parser');

module.exports = [
  json(),
  urlencoded({ extended: true }),
];
