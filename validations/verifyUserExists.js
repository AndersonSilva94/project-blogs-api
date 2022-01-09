const { User } = require('../models');
const { invalidFields } = require('../utils/messages');

const verifyUserExists = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user) throw invalidFields;

  return user;
};

module.exports = verifyUserExists;
