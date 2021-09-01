'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('sistemaamericanoProvas', {
      
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      professorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'proffessores', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },


      titulo: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      dataProva: {
        type: Sequelize.DATE,
        allowNull: false,

      },

      horaInicio: {
        type: Sequelize.TEXT,
        allowNull: false,

      },

      horaFinal: {
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
    return queryInterface.dropTable('sistemaamericanoProvas');
  }
};
