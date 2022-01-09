const { validateName } = require('../validations');
const { Category } = require('../models');
const { CREATED, OK_STATUS } = require('../utils/statusSuccess');

const createCategory = async (name) => {
  const validate = await validateName(name);
  const newCategory = await Category.create({ name: validate });

  return { status: CREATED, message: newCategory };
};

const getAllCategories = async () => {
  const getCategories = await Category.findAll();

  return { status: OK_STATUS, message: getCategories };
};

module.exports = {
  createCategory,
  getAllCategories,
};
