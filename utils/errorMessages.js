const INVALID_DISPLAY_NAME = '"displayName" length must be at least 8 characters long';
const INVALID_EMAIL = '"email" must be a valid email';
const REQUIRED_EMAIL = '"email" is required';
const EMPTY_EMAIL = '"email" is not allowed to be empty';
const INVALID_LENGTH_PASSWORD = '"password" length must be 6 characters long';
const REQUIRED_PASSWORD = '"password" is required';
const EMPTY_PASSWORD = '"password" is not allowed to be empty';
const USER_ALREADY_EXISTS = 'User already registered';
const INVALID_FIELDS = 'Invalid fields';
const TOKEN_UNDEFINED = 'Token not found';
const INVALID_TOKEN = 'Expired or invalid token';
const USER_NOT_EXISTS = 'User does not exist';
const INVALID_NAME = '"name" is required';
const INVALID_TITLE = '"title" is required';
const INVALID_CONTENT = '"content" is required';
const INVALID_CATEGORY_ID = '"categoryIds" is required';
const CATEGORY_ID_NOT_EXISTS = '"categoryIds" not found';
const POST_NOT_EXISTS = 'Post does not exist';
const CATEGORIES_NOT_EDITED = 'Categories cannot be edited';
const UNAUTHORIZED_USER = 'Unauthorized user';

module.exports = {
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
  CATEGORIES_NOT_EDITED,
  UNAUTHORIZED_USER,
};
