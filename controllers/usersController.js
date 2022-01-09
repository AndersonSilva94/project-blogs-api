const { createUser } = require('../services/userServices');

const postUser = async (request, response, next) => {
  try {
    const validyUser = await createUser(request.body);
    return response.status(validyUser.status).json(validyUser.message);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  postUser,
};
