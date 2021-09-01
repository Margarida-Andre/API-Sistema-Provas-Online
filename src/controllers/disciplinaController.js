const Disciplina = require("../models/Disciplina");
const Turma = require("../models/Turma");
const Professor = require("../models/Professor");
const Curso = require("../models/Curso");
const GrauAcademico = require("../models/grauAcademico");

module.exports = {
  //
  async show(req, res) {
    const { professorId } = req.params;
    const professorDisciplinas = await Professor.findByPk(professorId, {
      include: {
        association: "Disciplina",
      },
    });

    if (!professorDisciplinas) {
      return res.status(400).json({ message: "Esse professor não existe" });
    }

    return res.json(professorDisciplinas);
  },
  //

  async index(req, res) {
    const disciplinaAll = await Disciplina.findAll();
    if (disciplinaAll == 0) {
      return res.status(400).json({ message: "Não existe nenhuma disciplina" });
    }
    return res.json(disciplinaAll);
  },

  //

  async store(req, res) {
    //const { professorId } = req.params;
    const { professorId, grauAcademicoId, designacao } = req.body;

    //const professor = await Professor.findByPk(professorId);
    //if (!professor) {
    //  return res.status(400).json({ message: "Este professor não existe" });
    //}

    const grauAcademico = await GrauAcademico.findByPk(grauAcademicoId);
    if (!grauAcademico) {
      return res
        .status(400)
        .json({ message: "Este grau acadêmico não existe" });
    }

    if (designacao === " ") {
      return res
        .status(400)
        .json({ message: "Digite a designação da disciplina, por favor!" });
    }

    const disciplinaNome = await Disciplina.findOne({ where: { designacao } });
    if (disciplinaNome != null) {
      return res.status(400).json({ message: "Esta disciplina já existe" });
    }

    //  const turma = await Turma.findByPk(turmaId);
    // if (!turma) {
    //   return res.json({ message: "Turma não existe" });
    // }

    const disciplina = await Disciplina.findOrCreate({
      where: {
        designacao,
        grauAcademicoId,
        professorId,
      },
    });

    //await disciplina.addTurma(turma);

    return res.json(disciplina);
  },

  //

  async delete(req, res) {
    const { id, designacao } = req.body;
    const disciplinaDelete = await Disciplina.destroy({
      where: { id, designacao },
    });
    if (!disciplinaDelete) {
      return res.json({ message: "Este dado não existe" });
    }
    return res.json({ message: "Excluído com sucesso" });
  },

  //
  async update(req, res) {
    const { id, professorId, designacao } = req.body;

    const disciplinaInexistente = await Disciplina.findByPk(id);
    if (!disciplinaInexistente) {
      return res.status(400).json({ message: "Esta disciplina não existe" });
    }

    const disciplinaUpdate = await Disciplina.update(
      {
        id,
        professorId,
        grauAcademicoId,
        designacao,
      },
      { where: { id } }
    );

    return res.json({ message: "Actualizado com sucesso" });
  },
};
//
