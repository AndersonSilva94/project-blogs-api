const Joi = require('joi');
const { invalidEmail, emptyEmail } = require('../utils/messages');

const validateEmail = (email) => {
  if (!email) throw emptyEmail;

  const schema = Joi.object({
    email: Joi.string().not().empty().email(),
  });

  const { error } = schema.validate({ email });

  if (error) throw invalidEmail;

  return email;
};

module.exports = validateEmail;
