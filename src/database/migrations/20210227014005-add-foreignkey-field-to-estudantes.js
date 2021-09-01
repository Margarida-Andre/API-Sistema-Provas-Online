'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
     queryInterface.addColumn(
      'estudantes',
      'generoId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'generos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'id'
      }
    ),

    queryInterface.addColumn(
      'estudantes',
      'cursoId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'cursos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'generoId'
      }
    ),

    queryInterface.addColumn(
      'estudantes',
      'turmaId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'turmas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'cursoId'
      }
    ),

    queryInterface.addColumn(
      'estudantes',
      'grauAcademicoId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'grauAcademicos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'turmaId'
      }
    ),

    queryInterface.addColumn(
      'estudantes',
      'enderecoId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'enderecos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'grauAcademicoId'
      }
    ),
]);
},

  down: (queryInterface, Sequelize) => {
    return Promise.all([

      queryInterface.removeColumn(
        'estudantes',
        'generoId',
      ),
      queryInterface.removeColumn(
        'estudantes',
        'cursoId',
      ),

      queryInterface.removeColumn(
        'estudantes',
        'turmaId',
      ),

      queryInterface.removeColumn(
        'estudantes',
        'grauAcademicoId',
      ),

      queryInterface.removeColumn(
        'estudantes',
        'enderecoId',
      ),


    ]);
}

};
