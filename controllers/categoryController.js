const { categoryService } = require('../services');

const postCategory = async (request, response, next) => {
  try {
    const { name } = request.body;
    const validyCategory = await categoryService.createCategory(name);

    return response.status(validyCategory.status).json(validyCategory.message);
  } catch (err) {
    return next(err);
  }
};

const getAll = async (_request, response, next) => {
  try {
    const getCategories = await categoryService.getAllCategories();

    return response.status(getCategories.status).json(getCategories.message);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  postCategory,
  getAll,
};