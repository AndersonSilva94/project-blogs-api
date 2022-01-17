const { CREATED, OK_STATUS, NO_CONTENT } = require('../utils/statusSuccess');
const {
  validateCreatePost,
  verifyPostExists,
  validateUserPost,
  validateTitle,
  validateContent,
} = require('../validations');
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
      {
        model: User,
        as: 'user',
        attributes: {
          exclude: ['password'],
        },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });

  return { status: OK_STATUS, message: getPosts };
};

const getPostById = async (postId) => {
  await verifyPostExists(postId);

  const getPost = await BlogPost.findOne({
    where: { id: postId },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return { status: OK_STATUS, message: getPost };
};

const editPost = async (userId, postId, obj) => {
  await validateUserPost(userId, postId);

  const { title, content } = obj;

  await validateTitle(title);
  await validateContent(content);
  await BlogPost.update(
    { title, content },
    { where: { id: postId } },
  );

  const findPost = await BlogPost.findOne({
    where: { id: postId },
    attributes: {
      exclude: ['id', 'published', 'updated'],
    },
    include: [
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return { status: OK_STATUS, message: findPost };
};

const deletePostById = async (userId, postId) => {
  await verifyPostExists(postId);
  await validateUserPost(userId, postId);

  await BlogPost.destroy({
    where: { id: postId },
  });

  return { status: NO_CONTENT };
};

const searchByQuery = async (query) => {
  let response;

  if (query === '') {
    response = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
  }

  response = await BlogPost.findAll({
    where: { title: query, content: query },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!response) return { status: OK_STATUS, message: [] };

  return { status: OK_STATUS, message: response };
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  editPost,
  deletePostById,
  searchByQuery,
};
