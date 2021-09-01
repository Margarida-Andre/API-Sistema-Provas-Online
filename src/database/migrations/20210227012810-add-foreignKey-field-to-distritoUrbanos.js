'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'distritoUrbanos',
      'municipioId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'municipios', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'id'
      }
    );
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'distritoUrbanos',
        'municipioId',
      )
  
}

};
