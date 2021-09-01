const { Model, DataTypes } = require('sequelize');

class Pauta extends Model {
    
    static init(sequelize){
        super.init({
            nota: DataTypes.FLOAT,
        }, {
            sequelize
        })

    }

    //   static associate(models){
     //      this.belongsTo(models.Professor, { foreignKey: 'professorId', as: 'professor' });
     //      this.belongsTo(models.Estudante, { foreignKey: 'estudanteId', as: 'Estudante' });
      
       
   //    }

}

module.exports =  Pauta;