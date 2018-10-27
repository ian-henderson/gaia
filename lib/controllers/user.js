import { User } from '../models';

const controller = {
  get: (request, response) => response.send('/users get endpoint'),

  post: (request, response) => {
    const user = new User({ email: 'test@email.com' });
    // user.save(() => console.log('user saved'));
    // response.status(201).send();
  },
};

export default controller;
