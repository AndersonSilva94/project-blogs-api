const validateCategoryIds = require('./validateCategoryIds');
const validateContent = require('./validateContent');
const validateTitle = require('./validateTitle');
const verifyCategoryIdsExists = require('./verifyCategoryIdsExists');

const validateCreatePost = async (obj) => {
  const { title, content, categoryIds } = obj;

  await validateTitle(title);
  await validateContent(content);
  await validateCategoryIds(categoryIds);
  await verifyCategoryIdsExists(categoryIds);

  return obj;
};

module.exports = validateCreatePost;
