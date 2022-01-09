const Joi = require('joi');
const { invalidName } = require('../utils/messages');

const validateName = (name) => {
  const schema = Joi.object({
    name: Joi.string().not().empty().required(),
  });

  const { error } = schema.validate({ name });

  if (error) throw invalidName;
};

module.exports = validateName;
