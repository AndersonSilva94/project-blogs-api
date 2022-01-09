const generateToken = require('../utils/generateToken');
const { OK_STATUS } = require('../utils/statusSuccess');
const { validateLoginUser } = require('../validations');

const login = async (obj) => {
  const validate = await validateLoginUser(obj);
  const token = await generateToken(validate);

  return { status: OK_STATUS, message: token };
};

module.exports = {
  login,
};
