'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
     queryInterface.addColumn(
      'enderecos',
      'provinciaId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'provincias', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'id'
      }
    ),

    queryInterface.addColumn(
      'enderecos',
      'municipioId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'municipios', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'provinciaId'
      }
    ),

    queryInterface.addColumn(
      'enderecos',
      'distritoUrbanoId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'distritourbanos', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'municipioId'
      }
    ),

    queryInterface.addColumn(
      'enderecos',
      'bairroId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'bairros', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'distritoUrbanoId'
      }
    ),


]);
},

  down: (queryInterface, Sequelize) => {
    return Promise.all([

      queryInterface.removeColumn(
        'enderecos',
        'provinciaId',
      ),
      queryInterface.removeColumn(
        'enderecos',
        'municipioId',
      ),

      queryInterface.removeColumn(
        'enderecos',
        'distritoUrbanoId',
      ),

      queryInterface.removeColumn(
        'enderecos',
        'bairroId',
      )

    ]);
}

};
