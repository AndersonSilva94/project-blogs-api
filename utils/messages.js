const {
  INVALID_DISPLAY_NAME,
  INVALID_EMAIL,
  INVALID_LENGTH_PASSWORD,
  EMPTY_PASSWORD,
} = require('./errorMessages');
const { BAD_REQUEST } = require('./statusErrors');

const invalidDisplayName = { status: BAD_REQUEST, message: INVALID_DISPLAY_NAME };
const invalidEmail = { status: BAD_REQUEST, message: INVALID_EMAIL };
const invalidLengthPassword = { status: BAD_REQUEST, message: INVALID_LENGTH_PASSWORD };
const emptyPassword = { status: BAD_REQUEST, message: EMPTY_PASSWORD };

module.exports = {
  invalidDisplayName,
  invalidEmail,
  invalidLengthPassword,
  emptyPassword,
};
