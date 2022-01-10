const Joi = require('joi');
const { invalidTitle } = require('../utils/messages');

const validateTitle = (title) => {
  const schema = Joi.object({
    title: Joi.string().not().empty().required(),
  });

  const { error } = schema.validate({ title });

  if (error) throw invalidTitle;
};

module.exports = validateTitle;