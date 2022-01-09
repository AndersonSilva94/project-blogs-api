const PostCategory = (sequelize, _DataTypes) => {
  const PostCategoryModel = sequelize.define('PostCategory', {},
    { timestamps: false, tableName: 'PostsCategories' });

  PostCategoryModel.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategoryModel,
      foreignKey: 'id',
      otherKey: 'id',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostCategoryModel,
      foreignKey: 'id',
      otherKey: 'id',
    });
  };

  return PostCategoryModel;
};

module.exports = PostCategory;