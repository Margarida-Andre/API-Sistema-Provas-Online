const { Model, DataTypes } = require("sequelize");

class Curso extends Model {
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
    this.belongsTo(models.areaCurso, {
      foreignKey: "areaCursoId",
      as: "AreaCurso",
    });
    this.hasMany(models.Turma, { foreignKey: "cursoId", as: "Turma" });
    this.hasMany(models.Estudante, { foreignKey: "cursoId", as: "Estudante" });
    this.belongsToMany(models.Professor, {
      foreignKey: "cursoId",
      through: "professorcursos",
      as: "Professor",
    });
    // this.belongsToMany(models.Disciplina, { foreignKey: 'cursoId', through: 'disciplinacursos', as: 'Disciplina' });
  }
}

module.exports = Curso;
