const { Model, DataTypes } = require('sequelize');

class grauAcademico extends Model {
    
    static init(sequelize){
        super.init({
            designacao: DataTypes.STRING,
        }, {
            sequelize
        })

    }

       static associate(models){
             this.hasMany(models.Turma, { foreignKey: 'grauAcademicoId', as: 'Turma' });
             this.hasMany(models.Estudante, { foreignKey: 'grauAcademicoId', as: 'GrauAcademico' });
             this.hasMany(models.Disciplina, { foreignKey: 'grauAcademicoId', as: 'Disciplina' }); 
       
       }

}

module.exports =  grauAcademico;