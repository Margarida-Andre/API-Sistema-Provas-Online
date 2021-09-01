'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
     queryInterface.addColumn(
      'cursoInstituicoes',
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
      'cursoInstituicoes',
      'instituicaoId',
      {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'instituicoes', key: 'id' },
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
        'cursoInstituicoes',
        'cursoId',
      ),
      queryInterface.removeColumn(
        'cursoInstituicoes',
        'instituicaoId',
      ),

    ]);
}

};
