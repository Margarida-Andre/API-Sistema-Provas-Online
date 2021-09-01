'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'instituicoes',
      'enderecoId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'enderecos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'id',
      }
    );
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'instituicoes',
      'enderecoId',
      )
  
}

};
