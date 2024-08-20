'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Favoritos extends Model {
        // Definir associações, se necessário
        static associate(models) {
            // Exemplo de associação, se aplicável:
            // Favoritos.belongsTo(models.User, { foreignKey: 'usuario_id' });
            // Favoritos.belongsTo(models.Produto, { foreignKey: 'produto_id' });
        }
    };

    Favoritos.init({
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
        modelName: 'Favoritos',
        tableName: 'Favoritos',
        timestamps: true  // Se 'createdAt' e 'updatedAt' devem ser geridos automaticamente
    });

    return Favoritos;
};
