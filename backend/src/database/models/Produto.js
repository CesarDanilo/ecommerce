'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Produto extends Model {
        static associate(models) {
            Produto.hasMany(models.PedidoProduto, { foreignKey: 'produto_id' });
        }
    };

    Produto.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        descricao: {
            type: Sequelize.STRING,
            allowNull: false
        },
        preco: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        estoque: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        imagem: {
            type: Sequelize.BLOB('long'), // Usa o tipo BLOB para armazenar grandes quantidades de dados binários
            allowNull: true // Permitindo valores nulos caso a imagem não seja obrigatória
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        }
    }, {
        sequelize,
        modelName: 'Produto',
        tableName: 'Produto'
    });

    return Produto;
};