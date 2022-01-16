const {
  INVALID_DISPLAY_NAME,
  INVALID_EMAIL,
  REQUIRED_EMAIL,
  EMPTY_EMAIL,
  INVALID_LENGTH_PASSWORD,
  REQUIRED_PASSWORD,
  EMPTY_PASSWORD,
  USER_ALREADY_EXISTS,
  INVALID_FIELDS,
  TOKEN_UNDEFINED,
  INVALID_TOKEN,
  USER_NOT_EXISTS,
  INVALID_NAME,
  INVALID_TITLE,
  INVALID_CONTENT,
  INVALID_CATEGORY_ID,
  CATEGORY_ID_NOT_EXISTS,
  POST_NOT_EXISTS,
} = require('./errorMessages');
const { BAD_REQUEST, CONFLICT, UNAUTHORIZED, NOT_FOUND } = require('./statusErrors');

const invalidDisplayName = { status: BAD_REQUEST, message: INVALID_DISPLAY_NAME };
const invalidEmail = { status: BAD_REQUEST, message: INVALID_EMAIL };
const requiredEmail = { status: BAD_REQUEST, message: REQUIRED_EMAIL };
const emptyEmail = { status: BAD_REQUEST, message: EMPTY_EMAIL };
const invalidLengthPassword = { status: BAD_REQUEST, message: INVALID_LENGTH_PASSWORD };
const requiredPassword = { status: BAD_REQUEST, message: REQUIRED_PASSWORD };
const emptyPassword = { status: BAD_REQUEST, message: EMPTY_PASSWORD };
const userExists = { status: CONFLICT, message: USER_ALREADY_EXISTS };
const invalidFields = { status: BAD_REQUEST, message: INVALID_FIELDS };
const tokenUndefined = { status: UNAUTHORIZED, message: TOKEN_UNDEFINED };
const invalidToken = { status: UNAUTHORIZED, message: INVALID_TOKEN };
const userNotExists = { status: NOT_FOUND, message: USER_NOT_EXISTS };
const invalidName = { status: BAD_REQUEST, message: INVALID_NAME };
const invalidTitle = { status: BAD_REQUEST, message: INVALID_TITLE };
const invalidContent = { status: BAD_REQUEST, message: INVALID_CONTENT };
const invalidCategoryId = { status: BAD_REQUEST, message: INVALID_CATEGORY_ID };
const categoryIdsNotExists = { status: BAD_REQUEST, message: CATEGORY_ID_NOT_EXISTS };
const postNotExists = { status: NOT_FOUND, message: POST_NOT_EXISTS };

module.exports = {
  invalidDisplayName,
  invalidEmail,
  requiredEmail,
  emptyEmail,
  invalidLengthPassword,
  requiredPassword,
  emptyPassword,
  userExists,
  invalidFields,
  tokenUndefined,
  invalidToken,
  userNotExists,
  invalidName,
  invalidTitle,
  invalidContent,
  invalidCategoryId,
  categoryIdsNotExists,
  postNotExists,
};
