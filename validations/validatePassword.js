const { invalidLengthPassword, emptyPassword } = require('../utils/messages');

const validatePassword = (password) => {
  if (password.length !== 6) throw invalidLengthPassword;

  if (!password) throw emptyPassword;

  return password;
};

module.exports = validatePassword;
