const Provincia = require("../models/Provincia");

module.exports = {
  //
  async index(req, res) {
    const provinciasAll = await Provincia.findAll();
    if (provinciasAll == 0) {
      return res.status(400).json({ message: "Não existe nenhuma província" });
    }
    return res.json(provinciasAll);
  },
  //

  async store(req, res) {
    const { nome } = req.body;

    if (nome === " ") {
      return res.status(400).json({ message: "Digite o nome, por favor!" });
    }

    const ProvinciaNome = await Provincia.findOne({ where: { nome } });
    if (ProvinciaNome != null) {
      return res.status(400).json({ message: "Esta província já existe" });
    }
    const provinciaCreate = await Provincia.create({ nome });
    return res.json(provinciaCreate);
  },
  //

  async delete(req, res) {
    const { nome } = req.body;
    const provinciaDelete = await Provincia.destroy({ where: { nome } });
    if (!provinciaDelete) {
      return res.json({ message: "Esta província não existe" });
    }
    return res.json({ message: "Dados excluídos com sucesso" });
  },

  //

  async update(req, res) {
    const { id, nome } = req.body;

    const provinciaInexistente = await Provincia.findByPk(id);
    if (!provinciaInexistente) {
      return res.status(400).json({ message: "Esta província não existe" });
    }

    const ProvinciaNome = await Provincia.findOne({ where: { nome } });
    if (ProvinciaNome != null) {
      return res.json({ message: "Esta província já existe" });
    }

    const provinciaUpdate = await Provincia.update({ nome }, { where: { id } });
    return res.json({ message: "Dados actualizados com sucesso" });
  },

  //
};
