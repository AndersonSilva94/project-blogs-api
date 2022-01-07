'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const CategoriesTable = queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'category_id',
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    })
  },

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('Categories'),
};
