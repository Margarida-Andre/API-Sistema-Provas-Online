'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'bairros',
      'distritoUrbanoId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'distritoUrbanos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'id',
      }
    );
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'bairros',
      'distritoUrbanoId',
      )
  
}

};
