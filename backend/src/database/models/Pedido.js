'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Pedido extends Model {
        static associate(models) {
            Pedido.hasMany(models.PedidoProduto, { foreignKey: 'pedido_id' });
        }
    };

    Pedido.init({
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        usuario_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },
        status: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        valorTotal: {
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
        modelName: 'Pedido',
        tableName: 'Pedido'
    });

    return Pedido;
};