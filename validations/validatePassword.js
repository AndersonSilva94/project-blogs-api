const { invalidLengthPassword, requiredPassword, emptyPassword } = require('../utils/messages');

const validatePassword = (password) => {
  if (!password) throw requiredPassword;

  if (password.length === 0) throw emptyPassword;

  if (password.length !== 6) throw invalidLengthPassword;

  return password;
};

module.exports = validatePassword;
