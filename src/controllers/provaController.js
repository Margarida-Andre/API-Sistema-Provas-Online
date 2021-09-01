const Prova = require("../models/Prova");
const Professor = require("../models/Professor");

module.exports = {
  //
  async show(req, res) {
    const { professorId } = req.params;
    const professorProvas = await Professor.findByPk(professorId, {
      include: {
        association: "Prova",
      },
    });

    if (!professorProvas) {
      return res.status(400).json({ message: "Essa professor não existe" });
    }

    return res.json(professorProvas);
  },

  //
  async index(req, res) {
    const provaAll = await Prova.findAll();
    if (provaAll == 0) {
      return res.status(400).json({ message: "Não existe nenhuma prova" });
    }
    return res.json(provaAll);
  },
  //
  async store(req, res) {
    const {
      tipoProvaId,
      professorId,
      descricao,
      dataProva,
      quantQuestoes,
      inicioProva,
      finalProva,
    } = req.body;

    if (dataProva === "") {
      return res
        .status(400)
        .json({ message: "Digite a data da prova, por favor!" });
    }

    if (inicioProva === "") {
      return res
        .status(400)
        .json({ message: "Digite a duração da prova, por favor!" });
    }

    if (quantQuestoes === "") {
      return res
        .status(400)
        .json({ message: "Digite a quantidade de questões, por favor!" });
    }

    if (finalProva === "") {
      return res
        .status(400)
        .json({ message: "Digite as respostas, por favor!" });
    }

    const ProvaCreate = await Prova.create({
      tipoProvaId,
      professorId,
      descricao,
      dataProva,
      quantQuestoes,
      inicioProva,
      finalProva,
    });
    return res.json(ProvaCreate);
  },

  //

  async delete(req, res) {
    const { id } = req.params;
    const provaDelete = await Prova.destroy({ where: { id } });
    if (!provaDelete) {
      return res.json({ message: "Este dado não existe" });
    }
    return res.json({ message: "Excluído com sucesso" });
  },

  //

  async update(req, res) {
    const {
      id,
      tipoProvaId,
      professorId,
      descricao,
      dataProva,
      quantQuestoes,
      inicioProva,
      finalProva,
    } = req.body;

    const provaInexistente = await Prova.findByPk(id);
    if (!provaInexistente) {
      return res.status(400).json({ message: "Esta prova não existe" });
    }

    const provaUpdate = await Prova.update(
      {
        tipoProvaId,
        professorId,
        descricao,
        dataProva,
        quantQuestoes,
        inicioProva,
        finalProva,
      },
      { where: { id } }
    );

    return res.json({ message: "Actualizado com sucesso" });
  },

  //
};
