'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
     queryInterface.addColumn(
      'contactoEstudantes',
      'tipoContactoId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'tipoContactos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'id'
      }
    ),

    queryInterface.addColumn(
      'contactoEstudantes',
      'estudanteId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'estudantes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'tipoContactoId'
      }
    ),
]);
},

  down: (queryInterface, Sequelize) => {
    return Promise.all([

      queryInterface.removeColumn(
        'contactoEstudantes',
        'tipoContactoId',
      ),
      queryInterface.removeColumn(
        'contactoEstudantes',
        'estudanteId',
      ),

    ]);
}

};
