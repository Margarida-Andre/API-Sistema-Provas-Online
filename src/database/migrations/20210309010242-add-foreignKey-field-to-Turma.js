'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'turmas',
      'directorTurmaId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'directordeturmas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'id',
      }
    );

 },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'turmas',
      'directorTurmaId',
      )
  
}

};
