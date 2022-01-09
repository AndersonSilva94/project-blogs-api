const generateToken = require('../utils/generateToken');
const { OK_STATUS } = require('../utils/statusSuccess');
const { validateLoginUser } = require('../validations');

const login = async (obj) => {
  await validateLoginUser(obj);
  const token = await generateToken(obj);

  return { status: OK_STATUS, message: token };
};

module.exports = {
  login,
};
