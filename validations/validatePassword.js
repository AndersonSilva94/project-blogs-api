const { invalidLengthPassword, emptyPassword } = require('../utils/messages');

const validateEmail = (password) => {
  if (password.length !== 6) throw invalidLengthPassword;

  if (!password) throw emptyPassword;

  return password;
};

module.exports = validateEmail;
