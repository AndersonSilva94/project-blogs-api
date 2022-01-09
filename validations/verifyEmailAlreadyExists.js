const { User } = require('../models');
const { userExists } = require('../utils/messages');

const verifyEmailAlreadyExists = async (email) => {
  const existsEmail = await User.findOne({ where: { email } });

  if (existsEmail) throw userExists;

  return email;
};

module.exports = verifyEmailAlreadyExists;
