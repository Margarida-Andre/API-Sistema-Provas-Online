const { Model, DataTypes } = require("sequelize");

class Professor extends Model {
  static init(sequelize) {
    super.init(
      {
        enderecoId: DataTypes.INTEGER,
        generoId: DataTypes.INTEGER,
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "Proffessores",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Genero, { foreignKey: "generoId", as: "Genero" });
    /*this.belongsTo(models.Instituicao, {
      foreignKey: "instituicaoId",
      as: "Instituicao",
    });*/
    //  this.belongsTo(models.Endereco, { foreignKey: "enderecoId", as: "endereco", });
    // this.belongsTo(models.directorDeTurmas, {
    // foreignKey: "professorId",
    //as: "DirectorTurma",
    //});

    this.hasMany(models.ContactoProfessores, {
      foreignKey: "professorId",
      as: "ContactoProf",
    });
    this.belongsTo(models.Endereco, {
      foreignKey: "enderecoId",
      as: "Endereco",
    });
   // this.hasMany(models.Prova, { foreignKey: "professorId", as: "Prova" });
    this.hasMany(models.Disciplina, {
      foreignKey: "professorId",
      as: "Disciplina",
    });
    this.belongsToMany(models.Curso, {
      foreignKey: "professorId",
      through: "professorcursos",
      as: "Curso",
    });
    this.belongsToMany(models.Estudante, {
      foreignKey: "professorId",
      through: "estudanteprofessores",
      as: "Estudante",
    });
    this.belongsToMany(models.Turma, {
      foreignKey: "professorId",
      through: "professorturmas",
      as: "Turma",
    });

    this.hasMany(models.sistemaamericanoQuestoes, {
      foreignKey: "professorId",
      as: "Questoes",
    });

    this.hasMany(models.sistemaamericanoProvas, {
      foreignKey: "professorId",
      as: "Prova",
    });
  }
}

module.exports = Professor;
