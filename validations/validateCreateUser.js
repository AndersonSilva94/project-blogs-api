const validateDisplayName = require('./validateDisplayName');
const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');
const verifyEmailAlreadyExists = require('./verifyEmailAlreadyExists');

const validateCreateUser = async (obj) => {
  const { displayName, email, password } = obj;

  await validateDisplayName(displayName);
  await validateEmail(email);
  await validatePassword(password);
  await verifyEmailAlreadyExists(email);

  return obj;
};

module.exports = validateCreateUser;
