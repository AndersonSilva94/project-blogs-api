const INVALID_DISPLAY_NAME = '"displayName" length must be at least 8 characters long';
const INVALID_EMAIL = '"email" must be a valid email';
const REQUIRED_EMAIL = '"email" is required';
const EMPTY_EMAIL = '"email" is not allowed to be empty';
const INVALID_LENGTH_PASSWORD = '"password" length must be 6 characters long';
const REQUIRED_PASSWORD = '"password" is required';
const EMPTY_PASSWORD = '"password" is not allowed to be empty';
const USER_ALREADY_EXISTS = 'User already registered';

module.exports = {
  INVALID_DISPLAY_NAME,
  INVALID_EMAIL,
  REQUIRED_EMAIL,
  EMPTY_EMAIL,
  INVALID_LENGTH_PASSWORD,
  REQUIRED_PASSWORD,
  EMPTY_PASSWORD,
  USER_ALREADY_EXISTS,
};
