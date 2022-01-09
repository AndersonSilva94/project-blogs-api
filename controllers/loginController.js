const { loginService } = require('../services');

const loginUser = async (request, response, next) => {
  try {
    const validyUser = await loginService.login(request.body);
    return response.status(validyUser.status).json(validyUser.message);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  loginUser,
};
