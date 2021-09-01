'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
     queryInterface.addColumn(
      'professores',
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
      'professores',
      'generoId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'generos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'instituicaoId'
      }
    ),

    queryInterface.addColumn(
      'professores',
      'enderecoId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'enderecos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'generoId'
      }
    ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([

      queryInterface.removeColumn(
        'professores',
        'instituicaoId',
      ),
      queryInterface.removeColumn(
        'professores',
        'generoId',
      ),

      queryInterface.removeColumn(
        'professores',
        'enderecoId',
      ),


    ]);
}

};
