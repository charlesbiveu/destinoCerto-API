'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('collection_point_recycle_types', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false
      },
      recycle_types_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'recycle_types',
          key: 'id'
        },
        allowNull: false
      },
      collection_points_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'collection_points',
          key: 'id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('collection_point_recycle_types');
  }
};
