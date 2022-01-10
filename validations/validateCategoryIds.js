const Joi = require('joi');
const { invalidCategoryId } = require('../utils/messages');

const validateCategoryIds = (categoryIds) => {
  const schema = Joi.object({
    categoryIds: Joi.array().required(),
  });

  const { error } = schema.validate({ categoryIds });

  if (error) throw invalidCategoryId;
};

module.exports = validateCategoryIds;
