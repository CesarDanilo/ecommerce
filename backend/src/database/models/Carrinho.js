'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Carrinho extends Model {
    // Definir associações, se necessário
    static associate(models) {
      // Exemplo de associação, se aplicável:
      Carrinho.belongsTo(models.Users, { foreignKey: 'usuario_id' });
      Carrinho.belongsTo(models.Produto, { foreignKey: 'produto_id' });
    }
  };

  Carrinho.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users', // Nome da tabela de usuários
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    produto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Produto', // Nome da tabela de produtos
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Carrinho',
    tableName: 'Carrinho',
    timestamps: true  // Se 'createdAt' e 'updatedAt' devem ser geridos automaticamente
  });

  return Carrinho;
};
