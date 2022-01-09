const { INVALID_DISPLAY_NAME } = require('./errorMessages');
const { BAD_REQUEST } = require('./statusErrors');

const invalidDisplayName = { status: BAD_REQUEST, message: INVALID_DISPLAY_NAME };

module.exports = {
  invalidDisplayName,
};
