'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class PedidoProduto extends Model {
        static associate(models) {
            // PedidoProduto.hasMany(models.PedidoProdutoProduto, { foreignKey: 'pedidoProduto_id' });
        }
    };

    PedidoProduto.init({
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        pedido_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Pedido',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },
        produto_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Produto',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },
        quantidade: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        precoUnitario: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        }
    }, {
        sequelize,
        modelName: 'PedidoProduto',
        tableName: 'PedidoProduto'
    });

    return PedidoProduto;
};