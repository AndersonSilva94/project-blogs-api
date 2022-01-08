const PostCategory = (sequelize, _DataTypes) => {
  const PostCategoryModel = sequelize.define('PostCategory', {},
    { timestamps: false, tableName: 'PostsCategories' });

  PostCategoryModel.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categoryId',
      through: PostCategory,
      foreignKey: 'id',
      otherKey: 'id',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'postId',
      thorugh: PostCategory,
      foreignKey: 'id',
      otherKey: 'id',
    });
  };

  return PostCategoryModel;
};

module.exports = PostCategory;