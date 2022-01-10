const { OK_STATUS } = require('../utils/statusSuccess');
const { validateCreatePost } = require('../validations');
const { BlogPost } = require('../models');

const createPost = async (id, obj) => {
  const validatePost = await validateCreatePost(obj);

  const { title, content } = validatePost;

  const newPost = await BlogPost.create({ title, content, userId: id });

  return { status: OK_STATUS, message: newPost };
};

module.exports = {
  createPost,
};
