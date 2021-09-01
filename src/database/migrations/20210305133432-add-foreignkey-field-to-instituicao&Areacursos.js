'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
     queryInterface.addColumn(
      'instituicaoAreacursos',
      'instituicaoId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'instituicoes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'id'
      }
    ),

    queryInterface.addColumn(
      'instituicaoAreacursos',
      'areaCursoId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'areaCursos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'instituicaoId'
      }
    ),
]);
},

  down: (queryInterface, Sequelize) => {
    return Promise.all([

      queryInterface.removeColumn(
        'instituicaoAreacursos',
        'instituicaoId',
      ),
      queryInterface.removeColumn(
        'instituicaoAreacursos',
        'areaCursoId',
      ),

    ]);
}

};
