'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.changeColumn('Produto', 'imagem', {
            type: Sequelize.STRING, // Ou Sequelize.TEXT, dependendo do tamanho do caminho que você espera
            allowNull: true // Permitindo valores nulos, se necessário
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.changeColumn('Produto', 'imagem', {
            type: Sequelize.BLOB('long'), // Retorna ao tipo original se você precisar desfazer a migration
            allowNull: true
        });
    }
};
