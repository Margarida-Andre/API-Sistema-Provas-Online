const { Model, DataTypes } = require('sequelize');

class ContactoEstudantes extends Model {
    
    static init(sequelize){
        super.init({
            tipoContactoId: DataTypes.INTEGER, 
            estudanteId:  DataTypes.INTEGER, 
            infoContacto: DataTypes.STRING,
        }, {
            sequelize
        })

    }

     static associate(models){
           this.belongsTo(models.Estudante, { foreignKey: 'estudanteId', as: 'Estudante' });
           this.belongsTo(models.tipoContacto, { foreignKey: 'tipoContactoId', as: 'TipoContacto' });
       
     }

}

module.exports =  ContactoEstudantes;