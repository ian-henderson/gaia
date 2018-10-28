const { User } = require('../models');

const controller = {
  get: async (request, response) => {
    const users = await User.find();
    return response.status(200).send(users);
  },

  /*
  post: (request, response) => {
    const user = new User({ email: 'test@email.com' });
    user.save(() => console.log('user saved'));
    response.status(201).send();
  },
  */
};

module.exports = controller;
