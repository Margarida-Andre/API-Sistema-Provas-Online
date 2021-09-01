'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'directordeturmas',
      'nome',
      {
        type: Sequelize.STRING,
        allowNull: false,
        after: 'professorId',
      }
    );

 },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'directordeturmas',
      'nome',
      )
  
}

};
