'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const AddUserId = queryInterface.addColumn('BlogPosts', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'user_id',
      references: {
        model: 'Users',
        key: 'user_id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    return AddUserId;
  },

  down: async (queryInterface, Sequelize) => queryInterface.removeColumn('BlogPosts', 'userId'),
};
