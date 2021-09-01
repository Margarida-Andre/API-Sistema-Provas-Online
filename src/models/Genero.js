const { Model, DataTypes } = require('sequelize');

class Genero extends Model {
    
    static init(sequelize){
        super.init({
            designacao: DataTypes.STRING,
        }, {
            sequelize
        })

    }

     static associate(models){
           //this.belongsToMany(models.Estudante, { foreignKey: 'generoId', as: 'Estudante' });
           this.hasMany(models.Estudante, { foreignKey: 'generoId', as: 'Estudante' });
           this.hasMany(models.Professor, { foreignKey: 'generoId', as: 'Professor'});
           this.hasMany(models.Matricula, { foreignKey: 'generoId', as: 'Matricula'});
 
       }

}

module.exports =  Genero;