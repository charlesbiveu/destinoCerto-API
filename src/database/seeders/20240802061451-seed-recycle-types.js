'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('recycle_types', [
      { name: 'Vidro', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Papel', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Plástico', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Metal', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Orgânico', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Eletrônicos', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Baterias', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Óleo de Cozinha', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Medicamentos', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Pilhas', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Lâmpadas', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Têxteis', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Resíduos de Construção', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Móveis', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Madeira', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ferro', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Alumínio', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cobre', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bronze', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Aço', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('recycle_types', null, {});
  }
};
