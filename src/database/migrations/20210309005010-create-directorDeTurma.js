'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('directorDeTurmas', {
      
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
       
      },

      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      professorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'professores', key: 'id'},
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

  down:  (queryInterface, Sequelize) => {
    return queryInterface.dropTable('directorDeTurmas');
    
  }
};
