const { User } = require('../models');
const generateToken = require('../utils/generateToken');
const { CREATED, OK_STATUS } = require('../utils/statusSuccess');
const { validateCreateUser } = require('../validations');

const createUser = async (obj) => {
  const validate = await validateCreateUser(obj);
  await User.create(validate);
  const token = await generateToken(validate);

  return { status: CREATED, message: token };
};

const getAllUsers = async () => {
  const getUsers = await User.findAll({
    attributes: {
      exclude: ['password'],
    },
  });

  return { status: OK_STATUS, message: getUsers };
};

module.exports = {
  createUser,
  getAllUsers,
};
