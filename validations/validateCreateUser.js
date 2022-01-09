const {
  validateDisplayName,
  validateEmail,
  validatePassword,
  verifyEmailAlreadyExists,
} = require('.');

const validateCreateUser = async (obj) => {
  const { displayName, email, password } = obj;

  await validateDisplayName(displayName);
  await validateEmail(email);
  await validatePassword(password);
  await verifyEmailAlreadyExists(email);

  return obj;
};

module.exports = validateCreateUser;
