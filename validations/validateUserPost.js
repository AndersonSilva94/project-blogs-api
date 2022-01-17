const { BlogPost } = require('../models');
const { unauthorizedUser } = require('../utils/messages');

const validateUserPost = async (idUser, idPost) => {
  const { userId } = await BlogPost.findByPk(idPost);

  if (idUser !== userId) throw unauthorizedUser;
};

module.exports = validateUserPost;
