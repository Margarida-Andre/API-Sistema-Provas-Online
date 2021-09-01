'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('contactoProfessores', {
      
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      infoContacto: {
        type: Sequelize.STRING(50),
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
    return queryInterface.dropTable('contactoProfessores');
    
  }
};
