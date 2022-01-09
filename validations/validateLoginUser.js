const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');
const verifyUserExists = require('./verifyUserExists');

const validateLoginUser = async (obj) => {
  const { email, password } = obj;

  await validateEmail(email);
  await validatePassword(password);
  const user = await verifyUserExists({ email, password });

  return user;
};

module.exports = validateLoginUser;
