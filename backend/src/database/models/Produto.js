'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Produto extends Model {
        static associate(models) {
            Produto.hasMany(models.PedidoProduto, { foreignKey: 'produto_id' });
        }
    }

    Produto.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        preco: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        estoque: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        imagem: {
            type: DataTypes.BLOB('long'), // Usa o tipo BLOB para armazenar grandes quantidades de dados binários
            allowNull: true // Permitindo valores nulos caso a imagem não seja obrigatória
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
        sequelize,
        modelName: 'Produto',
        tableName: 'Produto',
        timestamps: true // Habilita o gerenciamento automático de createdAt e updatedAt
    });

    return Produto;
};
