const { postService } = require('../services');
const { categoriesNotEdited } = require('../utils/messages');

const postUser = async (request, response, next) => {
  // console.log(request.user);
  try {
    const { id } = request.user;
    const validyPost = await postService.createPost(id, request.body);

    return response.status(validyPost.status).json(validyPost.message);
  } catch (err) {
    return next(err);
  }
};

const getAll = async (_request, response, next) => {
  try {
    const getPosts = await postService.getAllPosts();

    return response.status(getPosts.status).json(getPosts.message);
  } catch (err) {
    return next(err);
  }
};

const getById = async (request, response, next) => {
  try {
    const { id } = request.params;
    const getPost = await postService.getPostById(id);

    return response.status(getPost.status).json(getPost.message);
  } catch (err) {
    return next(err);
  }
};

const updatePost = async (request, response, next) => {
  try {
    if (request.body.categoryIds) throw categoriesNotEdited;

    const { id: userId } = request.user;
    const { id: postId } = request.params;
    const edit = await postService.editPost(userId, postId, request.body);

    return response.status(edit.status).json(edit.message);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  postUser,
  getAll,
  getById,
  updatePost,
};
