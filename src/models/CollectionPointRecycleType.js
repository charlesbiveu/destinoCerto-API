const { DataTypes } = require('sequelize');
const connection = require('../database/connection');
const CollectionPoint = require('./CollectionPoint');
const RecycleType = require('./RecycleType');

const CollectionPointRecycleType = connection.define('collection_point_recycle_types', {
  recycle_types_id: {
    type: DataTypes.INTEGER,
    references: {
      model: RecycleType,
      key: 'id'
    },
    allowNull: false
  },
  collection_points_id: {
    type: DataTypes.INTEGER,
    references: {
      model: CollectionPoint,
      key: 'id'
    },
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
});

CollectionPoint.belongsToMany(RecycleType, {
  through: CollectionPointRecycleType,
  foreignKey: 'collection_points_id'
});
RecycleType.belongsToMany(CollectionPoint, {
  through: CollectionPointRecycleType,
  foreignKey: 'recycle_types_id'
});

module.exports = CollectionPointRecycleType;
