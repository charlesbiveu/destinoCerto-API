const { DataTypes } = require('sequelize');
const connection = require('../database/connection');
const User = require('./User'); // Adicione a associação com o model User

const formatPostalCode = (postalcode) => postalcode.replace(/[^\d]+/g, '');

const CollectionPoint = connection.define('collection_points', {
  name: {
    type: DataTypes.STRING(180),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  postalcode: {
    type: DataTypes.STRING(8),
    allowNull: false,
    validate: {
      isNumeric: true,
      len: [8, 8] // Validação para exatamente 8 caracteres
    }
  },
  street: {
    type: DataTypes.STRING(180),
    allowNull: false
  },
  neighborhood: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  city: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  state: {
    type: DataTypes.STRING(2),
    allowNull: false,
    validate: {
      isAlpha: true,
      len: [2, 2]
    }
  },
  number: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  complement: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  latitude: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  longitude: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  map_link: {
    type: DataTypes.STRING,
    allowNull: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
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
}, {
  hooks: {
    beforeSave: (collectionPoint) => {
      if (collectionPoint.postalcode) {
        collectionPoint.postalcode = formatPostalCode(collectionPoint.postalcode);
      }
    }
  }
});

// Associação com User
CollectionPoint.belongsTo(User, { foreignKey: 'user_id' });

module.exports = CollectionPoint;
