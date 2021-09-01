'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
     queryInterface.addColumn(
      'disciplinaEstudantes',
      'disciplinaId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'disciplinas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'id'
      }
    ),

    queryInterface.addColumn(
      'disciplinaEstudantes',
      'estudanteId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'estudantes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'disciplinaId'
      }
    ),
]);
},

  down: (queryInterface, Sequelize) => {
    return Promise.all([

      queryInterface.removeColumn(
        'disciplinaEstudantes',
        'disciplinaId',
      ),
      queryInterface.removeColumn(
        'disciplinaEstudantes',
        'estudanteId',
      ),

    ]);
}

};
