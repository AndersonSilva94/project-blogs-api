const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');
const verifyUserExists = require('./verifyUserExists');

const validateLoginUser = async (obj) => {
  const { email, password } = obj;

  await validateEmail(email);
  await validatePassword(password);
  await verifyUserExists({ email, password });
};

module.exports = validateLoginUser;
