'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('disciplinaCursos', {
      
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
    return queryInterface.dropTable('disciplinaCursos');
    
  }
};
