const { Model, DataTypes } = require("sequelize");

class Disciplina extends Model {
  static init(sequelize) {
    super.init(
      {
        designacao: DataTypes.STRING,
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
    this.belongsTo(models.grauAcademico, {
      foreignKey: "grauAcademicoId",
      as: "GrauAcademico",
    });
    this.belongsToMany(models.Turma, {
      foreignKey: "disciplinaId",
      through: "disciplinaturmas",
      as: "Turma",
    });
    //this.belongsToMany(models.Curso, { foreignKey: 'disciplinaId', through: 'disciplinacursos', as: 'Curso' });
  }
}

module.exports = Disciplina;
