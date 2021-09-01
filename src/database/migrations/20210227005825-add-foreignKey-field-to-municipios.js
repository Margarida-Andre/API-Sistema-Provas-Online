'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'municipios',
      'provinciaId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'provincias', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'id',
      }
    );
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'municipios',
        'provinciaId',
      )
  
}

};
