const { Model, DataTypes } = require("sequelize");

class Estudante extends Model {
  static init(sequelize) {
    super.init(
      {
        generoId: DataTypes.INTEGER,
        cursoId: DataTypes.INTEGER,
        turmaId: DataTypes.INTEGER,
        grauAcademicoId: DataTypes.INTEGER,
        enderecoId: DataTypes.INTEGER,
        nome: DataTypes.STRING,
        senha: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Genero, { foreignKey: "generoId", as: "Genero" });
    this.belongsTo(models.Turma, { foreignKey: "turmaId", as: "Turma" });
    this.belongsTo(models.Curso, { foreignKey: "cursoId", as: "Curso" });
    this.belongsTo(models.grauAcademico, {
      foreignKey: "grauAcademicoId",
      as: "GrauAcademico",
    });
    this.hasMany(models.ContactoEstudantes, {
      foreignKey: "estudanteId",
      as: "ContactoEstudantes",
    });
    this.belongsTo(models.Endereco, {
      foreignKey: "enderecoId",
      as: "Endereco",
    });
    this.belongsToMany(models.Professor, {
      foreignKey: "estudanteId",
      through: "estudanteprofessores",
      as: "Professor",
    });
    this.belongsToMany(models.Prova, {
      foreignKey: "estudanteId",
      through: "estudanteprovas",
      as: "Prova",
    });
  }
}

module.exports = Estudante;
