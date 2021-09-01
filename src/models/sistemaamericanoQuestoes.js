const { Model, DataTypes } = require("sequelize");

class sistemaamericanoQuestoes extends Model {
  static init(sequelize) {
    super.init(
      {
        provaId: DataTypes.INTEGER,
        pergunta: DataTypes.TEXT,
        respostaCorrecta: DataTypes.TEXT,
        respostaErrada1: DataTypes.TEXT,
        respostaErrada2: DataTypes.TEXT,
        respostaErrada3: DataTypes.TEXT,
        
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


    this.belongsTo(models.sistemaamericanoProvas, {
      foreignKey: "provaId",
      as: "Prova",
    });
  
  }
}
module.exports = sistemaamericanoQuestoes;
