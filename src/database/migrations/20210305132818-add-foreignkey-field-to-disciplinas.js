'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
'use strict';
    return Promise.all([
     queryInterface.addColumn(
      'disciplinas',
      'professorId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'professores', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'id',
      }
    ),

    queryInterface.addColumn(
      'disciplinas',
      'grauAcademicoId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'grauAcademicos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        after: 'professorId',
      }
    ),
  ]);
},

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
      'disciplinas',
      'professorId',
      ),

      queryInterface.removeColumn(
        'disciplinas',
        'grauAcademicoId',
        
        ),
      ]); 
  
}

};
