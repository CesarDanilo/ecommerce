'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Favoritos extends Model {
        static associate(models) {
            // Favoritos.hasMany(models.Pedido, { foreignKey: 'usuario_id' });
        }
    };

    Favoritos.init({
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
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        }
    }, {
        sequelize,
        modelName: 'Favoritos',
        tableName: 'Favoritos'
    });

    return Favoritos;
};