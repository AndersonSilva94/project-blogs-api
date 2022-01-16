const validateCreateUser = require('./validateCreateUser');
const validateLoginUser = require('./validateLoginUser');
const validateName = require('./validateName');
const validateCreatePost = require('./validateCreatePost');
const verifyPostExists = require('./verifyPostExists');

module.exports = {
  validateCreateUser,
  validateLoginUser,
  validateName,
  validateCreatePost,
  verifyPostExists,
};
