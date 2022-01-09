const { userServices } = require('../services');

const postUser = async (request, response, next) => {
  try {
    const validyUser = await userServices.createUser(request.body);

    return response.status(validyUser.status).json(validyUser.message);
  } catch (err) {
    return next(err);
  }
};

const getAll = async (_request, response, next) => {
  try {
    const getUsers = await userServices.getAllUsers();

    return response.status(getUsers.status).json(getUsers.message);
  } catch (err) {
    return next(err);
  }
};

const getById = async (request, response, next) => {
  try {
    const { id } = request.params;
    const getUser = await userServices.getUserById(id);

    return response.status(getUser.status).json(getUser.message);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  postUser,
  getAll,
  getById,
};
