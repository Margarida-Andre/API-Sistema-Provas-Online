const { Model, DataTypes } = require("sequelize");

class Resposta extends Model {
  static init(sequelize) {
    super.init(
      {
        provaId: DataTypes.INTEGER,
        respostas: DataTypes.TEXT,
      },
      {
        sequelize,
        tableName: "respostas",
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

module.exports = Resposta;
