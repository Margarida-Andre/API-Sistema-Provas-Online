const { Model, DataTypes } = require('sequelize');

class tipoContacto extends Model {
    
    static init(sequelize){
        super.init({
            designacao: DataTypes.STRING,
        }, {
            sequelize
        })

    }

       static associate(models){
           this.hasMany(models.ContactoEstudantes, { foreignKey: 'tipoContactoId', as: 'ContactoEstudantes' });   
       }

}

module.exports = tipoContacto;