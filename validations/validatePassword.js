const { invalidLengthPassword, emptyPassword } = require('../utils/messages');

const validatePassword = (password) => {
  if (!password) throw emptyPassword;

  if (password.length !== 6) throw invalidLengthPassword;

  return password;
};

module.exports = validatePassword;
