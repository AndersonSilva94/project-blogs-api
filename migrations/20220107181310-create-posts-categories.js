'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PostsCategories = queryInterface.createTable('PostsCategories', {
      postId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'post_id',
        references: {
          model: 'BlogPosts',
          key: 'post_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      categoryId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'category_id',
        references: {
          model: 'Categories',
          key: 'category_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    });

    return PostsCategories;
  },

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('PostsCategories'),
};
