const { validateName } = require('../validations');
const { Category } = require('../models');
const { CREATED } = require('../utils/statusSuccess');

const createCategory = async (name) => {
  const validate = await validateName(name);
  const newCategory = await Category.create({ name: validate });

  return { status: CREATED, message: newCategory };
};

module.exports = {
  createCategory,
};
