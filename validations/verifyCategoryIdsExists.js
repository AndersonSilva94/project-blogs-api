const { Category } = require('../models');
const { categoryIdsNotExists } = require('../utils/messages');

// lógica para verificar os ids de categorias baseado no código de Leonardo Ferreira - turma 12
// link https://github.com/tryber/sd-012-project-blogs-api/pull/28/commits/a8e107cde9f7d2b23a0d7561ba4c7b360606bf74
const verifyCategoryIdsExists = async (categoryIds) => {
  const verify = await Category.findAll({
    where: {
      id: [...categoryIds],
    },
  });

  if (verify.length < categoryIds.length) throw categoryIdsNotExists;
};

module.exports = verifyCategoryIdsExists;
