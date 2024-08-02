'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'users',{
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING(180),
      allowNull: false
    },
    cpf:{
      type: Sequelize.CHAR(11),
      allowNull: false,
      unique: true
    },
    gender: {
      type: Sequelize.ENUM,
      values: ['M', 'F', 'O'],
      allowNull: false
    },
    postalcode:{
      type: Sequelize.CHAR(9),
      allowNull: false
    },
    street:{
      type: Sequelize.STRING(180),
      allowNull: false
    },
    neighborhood: {
      type: Sequelize.STRING(150),
      allowNull: false
    },
    city: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    state:{
      type: Sequelize.CHAR(2),
      allowNull: false
    },
    number:{
      type: Sequelize.INTEGER(1),
      allowNull: false
    },
    complement: {
      type: Sequelize.STRING(30),
      allowNull: true
    },
    email: {
      type: Sequelize.STRING(180),
      allowNull: false,
      unique: true
    },
    password: {
     type: Sequelize.STRING,
     allowNull: false
    },
    birthdate:{
      type: Sequelize.DATE,
      allowNull: false
    },
    createdAt:{
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt:{
      type: Sequelize.DATE,
      allowNull: false
    }
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('users');    
  }
};
