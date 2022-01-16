const { postService } = require('../services');

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

module.exports = {
  postUser,
  getAll,
  getById,
};
