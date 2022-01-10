const { CREATED } = require('../utils/statusSuccess');
const { validateCreatePost } = require('../validations');
const { BlogPost, PostCategory } = require('../models');

const createPost = async (userId, obj) => {
  const validatePost = await validateCreatePost(obj);

  // console.log(userId);
  const { title, content, categoryIds } = validatePost;

  const { id: postId } = await BlogPost.create({ title, content, userId });

  categoryIds.forEach(async (categoryId) => PostCategory.create({ postId, categoryId }));

  const newPost = await BlogPost.findOne({
    where: { id: postId },
    attributes: {
      exclude: ['published', 'updated'],
    },
  });

  return { status: CREATED, message: newPost };
};

module.exports = {
  createPost,
};
