const { Model, DataTypes } = require("sequelize");

class Pergunta extends Model {
  static init(sequelize) {
    super.init(
      {
        provaId: DataTypes.INTEGER,
        perguntas: DataTypes.TEXT,
      },
      {
        sequelize,
        tableName: "perguntas",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Prova, {
      foreignKey: "provaId",
      as: "Prova",
    });
  }
}

module.exports = Pergunta;
