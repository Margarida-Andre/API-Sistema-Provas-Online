const { Model, DataTypes } = require("sequelize");

class Turma extends Model {
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
    this.belongsTo(models.Curso, { foreignKey: "cursoId", as: "Curso" });
    this.belongsTo(models.grauAcademico, {
      foreignKey: "grauAcademicoId",
      as: "GrauAcademico",
    });
    this.hasMany(models.Estudante, { foreignKey: "turmaId", as: "Estudante" });
    this.belongsTo(models.directorDeTurmas, {
      foreignKey: "directorTurmaId",
      as: "DirectorTurma",
    });
    this.belongsToMany(models.Disciplina, {
      foreignKey: "turmaId",
      through: "disciplinaturmas",
      as: "Disciplina",
    });
    this.belongsToMany(models.Professor, {
      foreignKey: "turmaId",
      through: "professorturmas",
      as: "Professor",
    });
  }
}

module.exports = Turma;
