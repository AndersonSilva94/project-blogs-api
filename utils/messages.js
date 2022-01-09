const {
  INVALID_DISPLAY_NAME,
  INVALID_EMAIL,
  REQUIRED_EMAIL,
  EMPTY_EMAIL,
  INVALID_LENGTH_PASSWORD,
  REQUIRED_PASSWORD,
  EMPTY_PASSWORD,
  USER_ALREADY_EXISTS,
} = require('./errorMessages');
const { BAD_REQUEST, CONFLICT } = require('./statusErrors');

const invalidDisplayName = { status: BAD_REQUEST, message: INVALID_DISPLAY_NAME };
const invalidEmail = { status: BAD_REQUEST, message: INVALID_EMAIL };
const requiredEmail = { status: BAD_REQUEST, message: REQUIRED_EMAIL };
const emptyEmail = { status: BAD_REQUEST, message: EMPTY_EMAIL };
const invalidLengthPassword = { status: BAD_REQUEST, message: INVALID_LENGTH_PASSWORD };
const requiredPassword = { status: BAD_REQUEST, message: REQUIRED_PASSWORD };
const emptyPassword = { status: BAD_REQUEST, message: EMPTY_PASSWORD };
const userExists = { status: CONFLICT, message: USER_ALREADY_EXISTS };

module.exports = {
  invalidDisplayName,
  invalidEmail,
  requiredEmail,
  emptyEmail,
  invalidLengthPassword,
  requiredPassword,
  emptyPassword,
  userExists,
};
