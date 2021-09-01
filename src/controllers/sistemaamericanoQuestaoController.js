const Questoes = require("../models/sistemaamericanoQuestoes");
const Professor = require("../models/Professor");

module.exports = {
  async show(req, res) {
    const { professorId } = req.params;
    const professorQuestoes = await Professor.findByPk(professorId, {
      include: {
        association: "Questoes",
      },
    });

    if (!professorQuestoes) {
      return res.status(400).json({ message: "Esse professor não existe" });
    }

    return res.json(professorQuestoes);
  },

  //
  async index(req, res) {
    const questoesAll = await Questoes.findAll();
    if (questoesAll == 0) {
      return res.status(400).json({ message: "Não existe nenhuma questão" });
    }
    return res.json(questoesAll);
  },
  
  async store(req, res) {
    const {
      provaId,
      professorId,
      pergunta,
      respostaCorrecta,
      respostaErrada1,
      respostaErrada2,
      respostaErrada3,
    } = req.body;

    if (professorId === "") {
      return res
        .status(400)
        .json({ message: "Digite o professor, por favor!" });
    }

    if (provaId === "") {
      return res
        .status(400)
        .json({ message: "Digite o título da prova, por favor!" });
    }

    if (pergunta === "") {
      return res.status(400).json({ message: "Digite pergunta, por favor!" });
    }

    if (respostaCorrecta === "") {
      return res
        .status(400)
        .json({ message: "Digite a resposta correta, por favor!" });
    }

    if (respostaErrada1 === "") {
      return res
        .status(400)
        .json({ message: "Digite uma resposta errada, por favor!" });
    }

    if (respostaErrada2 === "") {
      return res
        .status(400)
        .json({ message: "Digite uma resposta errada, por favor!" });
    }

    if (respostaErrada3 === "") {
      return res
        .status(400)
        .json({ message: "Digite uma resposta errada, por favor!" });
    }

    const QuestoesCreate = await Questoes.create({
      professorId,
      provaId,
      pergunta,
      respostaCorrecta,
      respostaErrada1,
      respostaErrada2,
      respostaErrada3,
    });
    return res.json(QuestoesCreate);
  },

  //

  async delete(req, res) {
    const { id } = req.params;
    const questaoDelete = await Questoes.destroy({ where: { id } });
    if (!questaoDelete) {
      return res.json({ message: "Este dado não existe" });
    }
    return res.json({ message: "Excluído com sucesso" });
  },

  //

  async update(req, res) {
    const {
      id,
      professorId,
      provaId,
      pergunta,
      respostaCorrecta,
      respostaErrada1,
      respostaErrada2,
      respostaErrada3,
    } = req.body;

    const questaoInexistente = await Questoes.findByPk(id);
    if (!questaoInexistente) {
      return res.status(400).json({ message: "Esta questão não existe" });
    }

    const questaoUpdate = await Questoes.update(
      {
        professorId,
        provaId,
        pergunta,
        respostaCorrecta,
        respostaErrada1,
        respostaErrada2,
        respostaErrada3,
      },
      { where: { id } }
    );

    return res.json({ message: "Actualizado com sucesso" });
  },

  //
};
