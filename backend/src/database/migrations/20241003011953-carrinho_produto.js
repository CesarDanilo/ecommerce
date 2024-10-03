'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carrinho_produto', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      produto_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Produto',
          key: 'id',
        }
      },
      carrinho_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Carrinho',
          key: 'id',
        }
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      preco_unitario: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }

    }

    );

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('Carrinho_produto');

  }
};
