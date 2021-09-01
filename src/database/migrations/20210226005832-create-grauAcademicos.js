'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('grauAcademicos', {
      
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      designacao: {
        type: Sequelize.STRING(3),
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
    return queryInterface.dropTable('grauAcademicos');
    
  }
};
