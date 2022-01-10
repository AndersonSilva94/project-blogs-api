const { CREATED, OK_STATUS } = require('../utils/statusSuccess');
const { validateCreatePost } = require('../validations');
const { BlogPost, PostCategory, User, Category } = require('../models');

const createPost = async (userId, obj) => {
  const validatePost = await validateCreatePost(obj);

  // console.log(userId);
  const { title, content, categoryIds } = validatePost;

  const { id: postId } = await BlogPost.create({ title, content, userId });

  // lógica para criar o postCategory obtida com ajuda de Robertson Maxwel - Turma 10 Tribo A
  categoryIds.forEach(async (categoryId) => PostCategory.create({ postId, categoryId }));

  const newPost = await BlogPost.findOne({
    where: { id: postId },
    attributes: {
      exclude: ['published', 'updated'],
    },
  });

  return { status: CREATED, message: newPost };
};

const getAllPosts = async () => {
  const getPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories' },
    ],
  });

  return { status: OK_STATUS, message: getPosts };
};

module.exports = {
  createPost,
  getAllPosts,
};
