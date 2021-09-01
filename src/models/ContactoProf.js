const { Model, DataTypes } = require('sequelize');

class ContactoProfessores extends Model {
    
    static init(sequelize){
        super.init({
            tipoContactoId: DataTypes.INTEGER, 
            professorId: DataTypes.INTEGER,
            infoContacto: DataTypes.STRING,
        }, {
            sequelize
        })

    }

     static associate(models){
           this.belongsTo(models.Professor, { foreignKey: 'professorId', as: 'Professor' });
           this.belongsTo(models.tipoContacto, { foreignKey: 'tipoContactoId', as: 'TipoContacto' });
       
     }

}

module.exports =  ContactoProfessores;