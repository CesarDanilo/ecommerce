'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Carrinho extends Model {
    // Definir associações, se necessário
    static associate(models) {
      // Exemplo de associação, se aplicável:
      Carrinho.belongsTo(models.Users, { foreignKey: 'usuario_id' });
    }
  };

  Carrinho.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',  // Certifique-se de que o nome do modelo está correto
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Carrinho',
    tableName: 'Carrinho',
    timestamps: true  // Se 'createdAt' e 'updatedAt' devem ser geridos automaticamente
  });

  return Carrinho;
};
