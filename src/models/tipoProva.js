const { Model, DataTypes } = require('sequelize');

class tipoProva extends Model {
    
    static init(sequelize){
        super.init({
            designacao: DataTypes.STRING,
        }, {
            sequelize
        })

    }

       static associate(models){
           this.hasMany(models.Prova, { foreignKey: 'tipoProvaId', as: 'Prova' });   
       
      }

}

module.exports = tipoProva;