'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('estudantes', {
      
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      numeroProcesso: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },

      nome: {
        type: Sequelize.STRING(60),
        allowNull: false,

      },

      senha: {
        type: Sequelize.STRING(8),
        allowNull: false,
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,

      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,

      },

      
    });
   
  },

  down:  (queryInterface, Sequelize) => {
    return queryInterface.dropTable('estudantes');
    
  }
};
