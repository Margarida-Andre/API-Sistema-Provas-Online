const { Model, DataTypes } = require('sequelize');

class areaCurso extends Model {
    
    static init(sequelize){
        super.init({
            
            designacao: DataTypes.STRING,
        }, {
            sequelize
        })

    }

     static associate(models){
          this.hasMany(models.Curso, { foreignKey: 'areaCursoId', as: 'Curso' });  
         // this.belongsTo(models.Instituicao, { foreignKey: 'areaCursoId', as: 'Instituicao'});
    
     }

}

module.exports = areaCurso;