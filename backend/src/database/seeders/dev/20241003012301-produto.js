'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Produto', [
      {
        nome: 'Laptop X1',
        descricao: 'Laptop de alta performance.',
        preco: 4500.00,
        estoque: 15,
        imagem: 'http://localhost:3001/uploads/01.jpg', // URL da imagem do Laptop X1
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Monitor Ultra HD',
        descricao: 'Monitor 27 polegadas com resolução 4K.',
        preco: 1500.00,
        estoque: 8,
        imagem: 'http://localhost:3001/uploads/02.jpg', // URL da imagem do Monitor Ultra HD
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Teclado Mecânico',
        descricao: 'Teclado RGB com switches mecânicos.',
        preco: 250.00,
        estoque: 30,
        imagem: 'http://localhost:3001/uploads/03.jpg', // URL da imagem do Teclado Mecânico
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Produto', null, {});
  }
};
