const Professor = require("../models/Professor");
const Turma = require("../models/Turma");
const Curso = require("../models/Curso");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require('../config/auth');

module.exports = {
  //
  async index(req, res) {
    const professorAll = await Professor.findAll();
    if (professorAll == 0) {
      return res.status(400).json({ message: "Não existe nenhum professor" });
    }
    return res.json(professorAll);
  },
  //

  async tkindex (req, res){
    res.send({ ok: true });
},
//

  async store(req, res) {
    const { generoId, enderecoId, nome, email, senha } = req.body;

    // const curso = await Curso.findByPk(cursoId);
    // if(!curso){
    //     return res.status(400).json({ error: 'Curso não existe'});
    // }

    //const turma = await Turma.findByPk(turmaId);

    // if (!turma) {
    //  return res.status(400).json({ error: "Turma não existe" });
    // }

    if (nome === "") {
      return res.status(400).json({ message: "Digite o seu nome, por favor!" });
    }

    if (senha === "") {
      return res.status(400).json({ message: "Digite sua senha, por favor!" });
    }

    const prof = await Professor.create({
      generoId,
      enderecoId,
      nome,
      email,
      senha,
    });

    // await prof.addTurma(turma);
    // await prof.addCurso(curso);

    return res.json(prof);
  },

//
  async storeLoginProf(req, res) {
    const { email, senha } = req.body;

    const login = await Professor.findOne({ where: { email }});
  

    if (!login) {
      return res.status(400).json({ message: "usuário não encontrado" });
    }
    
    
    if(senha!==login.senha){
    return res.status(400).json({ message: "inválida senha" });

  }
    login.senha = undefined;

    const token = jwt.sign({ id: login.id }, authConfig.secret, {
      expiresIn: 86400,
    });
    return res.json(login);
  },

  //
  async delete(req, res) {
    const { id } = req.body;
    const ProfessorDelete = await Professor.destroy({ where: { id } });
    if (!ProfessorDelete) {
      return res.json({ message: "Este dado não existe" });
    }
    return res.json({ message: "Excluído com sucesso" });
  },

  async deleteTurma(req, res) {
    const { turmaId, nome } = req.body;

    const turma = await Turma.findByPk(turmaId);

    if (!turma) {
      return res.status(400).json({ error: "Turma não existe" });
    }

    const professor = await Professor.findOne({
      where: { nome },
    });

    await professor.removeTurma(turma);

    return res.json({ message: "removido com sucesso" });
  },

  //
  async deleteCurso(req, res) {
    const { cursoId, nome } = req.body;

    const curso = await Curso.findByPk(cursoId);

    if (!curso) {
      return res.status(400).json({ error: "Curso não existe" });
    }

    const professor = await Professor.findOne({
      where: { nome },
    });

    await professor.removeCurso(curso);

    return res.json({ message: "removido com sucesso" });
  },
  //

  async update(req, res) {
    const { id, enderecoId, generoId, instituicaoId, nome, senha } = req.body;

    const professorInexistente = await Professor.findByPk(id);
    if (!professorInexistente) {
      return res.status(400).json({ message: "Este professor não existe" });
    }

    const professorUpdate = await Professor.update(
      {
        generoId,
        enderecoId,
        nome,
        email,
        senha,
      },
      { where: { id } }
    );
    return res.json({ message: "Actualizado com sucesso" });
  },
  //
};
