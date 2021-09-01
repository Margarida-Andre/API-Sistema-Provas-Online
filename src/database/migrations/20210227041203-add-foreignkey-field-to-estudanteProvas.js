'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
     queryInterface.addColumn(
      'estudanteProvas',
      'estudanteId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'estudantes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'id'
      }
    ),

    queryInterface.addColumn(
      'estudanteProvas',
      'provaId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'provas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'estudanteId'
      }
    ),
]);
},

  down: (queryInterface, Sequelize) => {
    return Promise.all([

      queryInterface.removeColumn(
        'estudanteProvas',
        'estudanteId',
      ),
      queryInterface.removeColumn(
        'estudanteProvas',
        'provaId',
      ),

    ]);
}

};
