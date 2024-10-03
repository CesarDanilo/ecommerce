'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Carrinho_produto extends Model {
        // Definir associações, se necessário
        static associate(models) {
            // Exemplo de associação, se aplicável:
            Carrinho_produto.belongsTo(models.Users, { foreignKey: 'usuario_id' });
            Carrinho_produto.belongsTo(models.Produto, { foreignKey: 'produto_id' });
        } 0
    };

    Carrinho_produto.init({
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
        produto_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Produto',  // Certifique-se de que o nome do modelo está correto
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        preco_unitario: {
            type: DataTypes.FLOAT,
            allowNull: false
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
        modelName: 'Carrinho_produto',
        tableName: 'Carrinho_produto',
        timestamps: true  // Se 'createdAt' e 'updatedAt' devem ser geridos automaticamente
    });

    return Carrinho_produto;
};
