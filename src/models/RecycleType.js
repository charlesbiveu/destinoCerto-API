const { DataTypes } = require('sequelize');
const connection = require('../database/connection');

const RecycleType = connection.define('recycle_types', {
  name: {
    type: DataTypes.STRING(180),
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  }
});

module.exports = RecycleType;
