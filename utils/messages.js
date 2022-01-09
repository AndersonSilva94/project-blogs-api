const { INVALID_DISPLAY_NAME, INVALID_EMAIL } = require('./errorMessages');
const { BAD_REQUEST } = require('./statusErrors');

const invalidDisplayName = { status: BAD_REQUEST, message: INVALID_DISPLAY_NAME };
const invalidEmail = { status: BAD_REQUEST, message: INVALID_EMAIL };

module.exports = {
  invalidDisplayName,
  invalidEmail,
};
