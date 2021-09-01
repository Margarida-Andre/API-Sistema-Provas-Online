'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('instituicoes', {
      
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      nomeInstituicao: {
        type: Sequelize.STRING(100),
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
    return queryInterface.dropTable('instituicoes');
    
  }
};
