'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'cursos',
      'areaCursoId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'areaCursos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'id',
      }
    );
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'cursos',
      'areaCursoId',
      )
  
}

};
