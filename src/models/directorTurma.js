const { Model, DataTypes } = require('sequelize');

class directorDeTurmas extends Model {
    
    static init(sequelize){
        super.init({
            professorId: DataTypes.INTEGER,
            nome: DataTypes.STRING,
        }, {
            sequelize
        })

    }

     static associate(models){
        this.belongsTo(models.Professor, { foreignKey: 'professorId', as: 'Professor' });
        this.hasMany(models.Turma, { foreignKey: 'directorTurmaId', as: 'Turma' });
        
       
     }

}

module.exports =  directorDeTurmas;