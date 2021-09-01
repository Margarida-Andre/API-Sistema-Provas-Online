const { Model, DataTypes } = require('sequelize');

class DistritoUrbano extends Model {
    
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
        }, {
            sequelize
        })

    }

       static associate(models){
           this.hasMany(models.Endereco, { foreignKey: 'distritoUrbanoId', as: 'Endereco' });
           this.belongsTo(models.Municipio, { foreignKey: 'municipioId', as: 'Municipio' });
           this.hasMany(models.Bairro, { foreignKey: 'distritoUrbanoId', as: 'Bairro' });
       
     }

}

module.exports = DistritoUrbano;