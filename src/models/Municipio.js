const { Model, DataTypes } = require('sequelize');

class Municipio extends Model {
    
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
        }, {
            sequelize
        })

    }

       static associate(models){
           this.hasMany(models.Endereco, { foreignKey: 'municipioId', as: 'Endereco' });
           this.belongsTo(models.Provincia, { foreignKey: 'provinciaId', as: 'provincia' });
           this.hasMany(models.DistritoUrbano, { foreignKey: 'municipioId', as: 'DistritoUrbano' });
       
      }

}

module.exports = Municipio;