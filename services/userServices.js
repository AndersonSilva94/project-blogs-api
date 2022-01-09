const { User } = require('../models');
const generateToken = require('../utils/generateToken');
const { CREATED } = require('../utils/statusSuccess');
const { validateCreateUser } = require('../validations');

const createUser = async (obj) => {
  const validate = await validateCreateUser(obj);
  await User.create(validate);
  const token = await generateToken(validate);

  return { status: CREATED, message: token };
};

module.exports = {
  createUser,
};
