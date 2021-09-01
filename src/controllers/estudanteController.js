const Estudante = require("../models/Estudante");
const Professor = require("../models/Professor");
const Prova = require("../models/Prova");

module.exports = {
  //
  async index(req, res) {
    const estudanteAll = await Estudante.findAll();
    if (estudanteAll == 0) {
      return res.status(400).json({ message: "Não existe nenhum professor" });
    }
    return res.json(estudanteAll);
  },
  //

  async store(req, res) {
    // const { professorId } = req.params;
    const {
      generoId,
      cursoId,
      turmaId,
      grauAcademicoId,
      enderecoId,
      nome,
      senha,
    } = req.body;



    if (nome === "") {
      return res.status(400).json({ message: "Digite o seu nome, por favor!" });
    }

    if (senha === "") {
      return res.status(400).json({ message: "Digite sua senha, por favor!" });
    }

    

    // const professor = await Professor.findByPk(professorId);
    // if (!professor) {
    //  return res.json({ message: "Professor não existe" });
    //  }

    //const prova = await Prova.findByPk(provaId);
    //if (!prova) {
    //  return res.json({ message: "Prova não existe" });
    // }

    const estudanteCreate = await Estudante.create({
      generoId,
      cursoId,
      turmaId,
      grauAcademicoId,
      enderecoId,
      nome,
      senha,
    });

    return res.json(estudanteCreate);
  },

  //
  async delete(req, res) {
    const { numeroProcesso, nome } = req.body;
    const estudanteDelete = await Estudante.destroy({
      where: { numeroProcesso, nome },
    });
    if (!estudanteDelete) {
      return res.json({ message: "Este dado não existe" });
    }
    return res.json({ message: "Excluído com sucesso" });
  },
  //

  async update(req, res) {
    const {
      id,
      generoId,
      cursoId,
      turmaId,
      grauAcademicoId,
      enderecoId,
      nome,
      senha,
    } = req.body;

    const estudanteInexistente = await Estudante.findByPk(id);
    if (!estudanteInexistente) {
      return res.status(400).json({ message: "Este estudante não existe" });
    }

    const estudanteUpdate = await Estudante.update(
      {
        id,
        generoId,
        cursoId,
        turmaId,
        grauAcademicoId,
        enderecoId,
        nome,
        senha,
        
      },
      { where: { id } }
    );
    return res.json({ message: "Actualizado com sucesso" });
  },

  //
};
