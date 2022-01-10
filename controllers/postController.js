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

module.exports = {
  postUser,
};
