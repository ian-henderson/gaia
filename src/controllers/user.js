const { User } = require('../models');

const controller = {
  // TODO: Figure out a pagination pattern for this. Maybe a middleware?
  get: async (request, response, next) => {
    try {
      const users = await User.find();
      response.status(200).send(users);
    } catch (error) {
      response.status(500).send();
      next(error);
    }
  },

  post: async (request, response, next) => {
    const data = {
      created: Date.now(),
      email: request.body.email,
    };
    try {
      await new User(data).save((error, user) => {
        if (error) {
          response.status(400).send();
          next(error);
        }
        response.status(201).send(user);
      });
    } catch (error) {
      response.status(500).send();
      next(error);
    }
  },
};

module.exports = controller;
