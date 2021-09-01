'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('sistemaamericanoQuestoes', {
      
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      provaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'sistemaamericanoprovas', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      professorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'proffessores', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      
      pergunta: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      respostaCorrecta: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      respostaErrada1: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      respostaErrada2: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      respostaErrada3: {
        type: Sequelize.TEXT,
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

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sistemaamericanoQuestoes');
  }
};
