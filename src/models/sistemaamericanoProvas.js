const { Model, DataTypes } = require("sequelize");

class sistemaamericanoProvas extends Model {
  static init(sequelize) {
    super.init(
      {
        professorId: DataTypes.INTEGER,
        titulo: DataTypes.TEXT,
        dataProva: DataTypes.DATE,
        horaInicio: DataTypes.TEXT,
        horaFinal: DataTypes.TEXT,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Professor, {
      foreignKey: "professorId",
      as: "Professor",
    });

    this.hasMany(models.sistemaamericanoQuestoes, {
      foreignKey: "provaId",
      as: "Questoes",
    });
  }
}

module.exports = sistemaamericanoProvas;
