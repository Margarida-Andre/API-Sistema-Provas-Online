const Resposta = require("../models/Resposta");

module.exports = {
  //

  async index(req, res) {
    const respostaAll = await Resposta.findAll();
    if (respostaAll == 0) {
      return res.status(400).json({ message: "Não existe nenhuma resposta" });
    }
    return res.json(respostaAll);
  },

  //
  async store(req, res) {
    const { provaId, respostas } = req.body;

    if (respostas === " ") {
      return res.status(400).json({ message: "Digite a resposta, por favor!" });
    }

    const respostaCreate = await Resposta.create({ provaId, respostas });

    return res.json(respostaCreate);
  },

  //
  async delete(req, res) {
    const { id } = req.body;
    const respostaDelete = await Resposta.destroy({
      where: { id },
    });
    if (!respostaDelete) {
      return res.json({ message: "Este dado não existe" });
    }
    return res.json({ message: "Excluído com sucesso" });
  },
  //

  async update(req, res) {
    const { id, provaId, respostas } = req.body;

    const respostaInexistente = await Resposta.findByPk(id);
    if (!respostaInexistente) {
      return res.status(400).json({ message: "Esta resposta não existe" });
    }

    const respostaUpdate = await Resposta.update(
      { provaId, respostas },
      { where: { id } }
    );
    return res.json({ message: "Actualizado com sucesso" });
  },
  //
};
