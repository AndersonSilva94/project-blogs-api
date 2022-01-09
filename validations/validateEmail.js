const Joi = require('joi');
const { invalidEmail, requiredEmail, emptyEmail } = require('../utils/messages');

const validateEmail = (email) => {
  if (!email) throw requiredEmail;

  if (email.length === 0) throw emptyEmail;

  const schema = Joi.object({
    email: Joi.string().not().empty().email(),
  });

  const { error } = schema.validate({ email });

  if (error) throw invalidEmail;
};

module.exports = validateEmail;
