const Joi = require('joi');
const { invalidContent } = require('../utils/messages');

const validateContent = (content) => {
  const schema = Joi.object({
    content: Joi.string().not().empty().required(),
  });

  const { error } = schema.validate({ content });

  if (error) throw invalidContent;
};

module.exports = validateContent;
