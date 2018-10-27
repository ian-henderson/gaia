import { Router } from 'express';

const router = Router();

const routes = {
  '/': {
    get: (request, response) => response.send('Hello, world!'),
  },
};

router.map = (a, route = '') => Object.keys(a).forEach((key) => {
  if (typeof a[key] === 'object') router.map(a[key], route + key);
  if (typeof a[key] === 'function') router[key](route, a[key]);
});

router.map(routes);

export default router;
