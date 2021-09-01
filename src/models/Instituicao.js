const { Model, DataTypes } = require("sequelize");

class Instituicao extends Model {
  static init(sequelize) {
    super.init(
      {
        enderecoId: DataTypes.INTEGER,
        nomeInstituicao: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "instituicoes",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Endereco, {
      foreignKey: "enderecoId",
      as: "Endereco",
    });
    //this.hasMany(models.areaCurso, { foreignKey: 'areaCursoId', as: 'AreaCurso' });
   /* this.hasMany(models.Professor, {
      foreignKey: "instituicaoId",
      as: "Professor",
    });*/
  }
}

module.exports = Instituicao;
