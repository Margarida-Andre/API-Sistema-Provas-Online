const Pergunta = require("../models/Pergunta");

module.exports = {
  //

  async index(req, res) {
    const perguntaAll = await Pergunta.findAll();
    if (perguntaAll == 0) {
      return res.status(400).json({ message: "Não existe nenhuma pergunta" });
    }
    return res.json(perguntaAll);
  },

  //
  async store(req, res) {
    const { provaId, perguntas } = req.body;

    if (perguntas === " ") {
      return res.status(400).json({ message: "Digite a pergunta, por favor!" });
    }

    const perguntaCreate = await Pergunta.create({ provaId, perguntas });

    return res.json(perguntaCreate);
  },

  //
  async delete(req, res) {
    const { id } = req.body;
    const perguntaDelete = await Pergunta.destroy({
      where: { id },
    });
    if (!perguntaDelete) {
      return res.json({ message: "Este dado não existe" });
    }
    return res.json({ message: "Excluído com sucesso" });
  },
 
  //
  async update(req, res) {
    const { id, provaId, perguntas } = req.body;

    const perguntaInexistente = await Pergunta.findByPk(id);
    if (!perguntaInexistente) {
      return res.status(400).json({ message: "Esta pergunta não existe" });
    }

    const perguntaUpdate = await Pergunta.update(
      { provaId, perguntas },
      { where: { id } }
    );
    return res.json({ message: "Actualizado com sucesso" });
  },
  //
};
