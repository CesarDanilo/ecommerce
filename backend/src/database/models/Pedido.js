'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Pedido extends Model {
        static associate(models) {
            Pedido.hasMany(models.PedidoProduto, { foreignKey: 'pedido_id' });
        }
    };

    Pedido.init({
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
                model: 'Users',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        valorTotal: {
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
        modelName: 'Pedido',
        tableName: 'Pedido',
        timestamps: true
    });

    return Pedido;
};
