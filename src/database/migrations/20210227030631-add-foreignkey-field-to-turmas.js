'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
     queryInterface.addColumn(
      'turmas',
      'cursoId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'cursos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'id'
      }
    ),

    queryInterface.addColumn(
      'turmas',
      'grauAcademicoId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'grauAcademicos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'cursoId'
      }
    ),
]);
},

  down: (queryInterface, Sequelize) => {
    return Promise.all([

      queryInterface.removeColumn(
        'turmas',
        'cursoId',
      ),
      queryInterface.removeColumn(
        'turmas',
         'grauAcademicoId',
      ),

    ]);
}

};
