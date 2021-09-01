'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
     queryInterface.addColumn(
      'disciplinaCursos',
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
      'disciplinaCursos',
      'cursoId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'cursos', key: 'id' },
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
        'disciplinaCursos',
        'disciplinaId',
      ),
      queryInterface.removeColumn(
        'disciplinaCursos',
        'cursoId',
      ),

    ]);
}

};
