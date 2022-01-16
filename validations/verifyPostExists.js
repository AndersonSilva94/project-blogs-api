const { BlogPost } = require('../models');
const { postNotExists } = require('../utils/messages');

const verifyPostExists = async (id) => {
  const existsPost = await BlogPost.findByPk(id);

  if (!existsPost) throw postNotExists;
};

module.exports = verifyPostExists;
