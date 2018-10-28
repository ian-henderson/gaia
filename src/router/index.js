const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();

const routes = {
  '/users': userController,
};

router.map = (a, route = '') => Object.keys(a).forEach((key) => {
  if (typeof a[key] === 'object') router.map(a[key], route + key);
  if (typeof a[key] === 'function') router[key](route, a[key]);
});

router.map(routes);

module.exports = router;
