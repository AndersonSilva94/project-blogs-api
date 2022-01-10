const { CREATED } = require('../utils/statusSuccess');
const { validateCreatePost } = require('../validations');
const { BlogPost } = require('../models');

const createPost = async (userId, obj) => {
  const validatePost = await validateCreatePost(obj);

  // console.log(userId);
  const { title, content } = validatePost;

  const { id } = await BlogPost.create({ title, content, userId });

  // console.log(id);

  const newPost = await BlogPost.findOne({
    where: { id },
    attributes: {
      exclude: ['published', 'updated'],
    },
  });

  return { status: CREATED, message: newPost };
};

module.exports = {
  createPost,
};
