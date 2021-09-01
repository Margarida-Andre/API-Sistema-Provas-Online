const { Model, DataTypes } = require('sequelize');

class Bairro extends Model {
    
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
        }, {
            sequelize
        })

    }

    static associate(models){
         this.hasMany(models.Endereco, { foreignKey: 'bairroId', as: 'Endereco' });
         this.belongsTo(models.DistritoUrbano, { foreignKey: 'distritoUrbanoId', as: 'DistritoUrbano' });
        
       
    }
}

module.exports = Bairro;