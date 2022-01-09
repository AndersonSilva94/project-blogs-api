const jwt = require('jsonwebtoken');
const { secret } = require('../utils/tokenConfigs');
const { User } = require('../models');
const { tokenUndefined, invalidToken } = require('../utils/messages');

const verifyToken = async (request, response, next) => {
  const token = request.headers.authorization;

  try {
    if (token === undefined || token === '') throw tokenUndefined;

    const payload = jwt.verify(token, secret);

    const { data } = await User.findOne({ where: { email: payload.email } });

    request.user = data;
    next();
  } catch (err) {
    if (err.status) return response.status(err.status).json({ message: err.message });
    return response.status(invalidToken.status).json({ message: invalidToken.message });
  }
};

module.exports = verifyToken;
