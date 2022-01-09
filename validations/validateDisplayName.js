const Joi = require('joi');
const { invalidDisplayName } = require('../utils/messages');

const validateDisplayName = async (displayName) => {
  const schema = Joi.object({
    displayName: Joi.string().not().empty().min(8),
  });

  const { error } = schema.validate({ displayName });

  if (error) throw invalidDisplayName;

  return displayName;
};

module.exports = validateDisplayName;
