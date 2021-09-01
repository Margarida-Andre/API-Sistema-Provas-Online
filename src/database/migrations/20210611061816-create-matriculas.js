'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('matriculas', {
      
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      
      nome: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      email: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      dataNascimento: {
        type: Sequelize.DATE,
        allowNull: false,

      },

      bi: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      enderecoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'enderecos', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      generoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'generos', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('matriculas');
  }
};
