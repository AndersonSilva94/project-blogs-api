const jwt = require('jsonwebtoken');
const { secret } = require('../utils/tokenConfigs');
const { User } = require('../models');
const { tokenUndefined, invalidToken } = require('../utils/messages');

const verifyToken = async (request, response, next) => {
  try {
    const token = request.headers.authorization;

    if (!token) throw tokenUndefined;

    const payload = jwt.verify(token, secret);

    const user = await User.findOne({ where: { email: payload.email } });

    if (!user) throw invalidToken;

    const { password, ...userWithoutPassword } = user;

    request.user = userWithoutPassword;
    next();
  } catch (err) {
    return response.status(500).json({ message: err.message });
  }
};

module.exports = verifyToken;
