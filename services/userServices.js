const { User } = require('../models');
const generateToken = require('../utils/generateToken');
const { userNotExists } = require('../utils/messages');
const { CREATED, OK_STATUS, NO_CONTENT } = require('../utils/statusSuccess');
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

const getUserById = async (id) => {
  const findUser = await User.findOne({
    where: { id },
    attributes: {
      exclude: ['password'],
    },
  });

  if (!findUser) throw userNotExists;

  return { status: OK_STATUS, message: findUser };
};

const deleteUserById = async (id) => {
  await User.destroy({
    where: { id },
  });

  return { status: NO_CONTENT };
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUserById,
};
