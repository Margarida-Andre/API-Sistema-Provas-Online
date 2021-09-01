'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
    

    queryInterface.addColumn(
      'proffessores',
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
      'proffessores',
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
        'proffessores',
        'generoId',
      ),

      queryInterface.removeColumn(
        'professores',
        'enderecoId',
      ),


    ]);
}

};
