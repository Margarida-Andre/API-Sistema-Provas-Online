const { Model, DataTypes } = require("sequelize");

class Prova extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: DataTypes.TEXT,
        dataProva: DataTypes.DATE,
        quantQuestoes: DataTypes.INTEGER,
        inicioProva: DataTypes.STRING,
        finalProva: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.tipoProva, {
      foreignKey: "tipoProvaId",
      as: "TipoProva",
    });
    this.belongsTo(models.Professor, {
      foreignKey: "professorId",
      as: "Professor",
    });
    this.belongsToMany(models.Estudante, {
      foreignKey: "provaId",
      through: "estudanteprovas",
      as: "Estudante",
    });

    this.hasMany(models.Pergunta, { foreignKey: "provaId", as: "Pergunta", });

    this.hasMany(models.Resposta, { foreignKey: "provaId", as: "Resposta", });
  }
}

module.exports = Prova;
