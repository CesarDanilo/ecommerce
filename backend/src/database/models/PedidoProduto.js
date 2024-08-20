'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class PedidoProduto extends Model {
        static associate(models) {
            // Se houver associações, defina-as aqui
            // Exemplo:
            // PedidoProduto.belongsTo(models.Pedido, { foreignKey: 'pedido_id' });
            // PedidoProduto.belongsTo(models.Produto, { foreignKey: 'produto_id' });
        }
    }

    PedidoProduto.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        pedido_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Pedido',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },
        produto_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Produto',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        precoUnitario: {
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
        modelName: 'PedidoProduto',
        tableName: 'PedidoProduto',
        timestamps: true // Habilita o gerenciamento automático de createdAt e updatedAt
    });

    return PedidoProduto;
};
