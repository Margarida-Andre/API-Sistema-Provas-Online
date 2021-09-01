const { Model, DataTypes } = require('sequelize');

class Provincia extends Model {
    
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'provincias',
        })

    }

    static associate(models){
             this.hasMany(models.Endereco, { foreignKey: 'provinciaId', as: 'Endereco' });
             this.hasMany(models.Municipio, { foreignKey: 'provinciaId', as: 'municipio' });
      }

}

module.exports = Provincia ;

