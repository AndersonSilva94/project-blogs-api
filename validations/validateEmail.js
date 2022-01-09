const Joi = require('joi');
const { invalidEmail } = require('../utils/messages');

const validateEmail = (email) => {
  const schema = Joi.object({
    email: Joi.string().not().empty().email()
      .required(),
  });

  const { error } = schema.validate({ email });

  if (error) throw invalidEmail;

  return email;
};

module.exports = validateEmail;
