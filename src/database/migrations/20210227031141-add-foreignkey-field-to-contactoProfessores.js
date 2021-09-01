'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
     queryInterface.addColumn(
      'contactoProfessores',
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
      'contactoProfessores',
      'professorId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'professores', key: 'id' },
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
        'contactoProfessores',
        'tipoContactoId',
      ),
      queryInterface.removeColumn(
        'contactoProfessores',
        'professorId',
      ),

    ]);
}

};
