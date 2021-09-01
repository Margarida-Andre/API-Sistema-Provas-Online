const { Model, DataTypes } = require("sequelize");

class Matriculas extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        dataNascimento: DataTypes.STRING,
        bi: DataTypes.STRING,
        enderecoId: DataTypes.INTEGER,
        generoId: DataTypes.INTEGER,
        
      },
      {
        sequelize,
        tableName: "matriculas",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Endereco, {
        foreignKey: "enderecoId",
        as: "Endereco",
      });

    this.belongsTo(models.Genero, { foreignKey: "generoId", as: "Genero" });
   
  }
}

module.exports = Matriculas;
