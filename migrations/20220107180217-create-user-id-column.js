'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const AddUserId = queryInterface.addColumn('BlogPosts', 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    return AddUserId;
  },

  down: async (queryInterface, Sequelize) => queryInterface.removeColumn('BlogPosts', 'userId'),
};
