const Endereco = require("../models/Endereco");

module.exports = {
  //
  async index(req, res) {
    const enderecoAll = await Endereco.findAll();
    if (enderecoAll == 0) {
      return res.status(400).json({ message: "Não existe nenhum gênero" });
    }
    return res.json(enderecoAll);
  },
  //

  async store(req, res) {
    const {
      provinciaId,
      municipioId,
      distritoUrbanoId,
      bairroId,
      rua,
    } = req.body;

    const EnderecoCreate = await Endereco.create({
      provinciaId,
      municipioId,
      distritoUrbanoId,
      bairroId,
      rua,
    });

    return res.json(EnderecoCreate);
  },

  //

  async delete(req, res) {
    const { id } = req.body;
    const enderecoDelete = await Endereco.destroy({ where: { id } });
    if (!enderecoDelete) {
      return res.json({ message: "Este dado não existe" });
    }
    return res.json({ message: "Excluído com sucesso" });
  },

  //

  async update(req, res) {
    const {
      id,
      provinciaId,
      municipioId,
      distritoUrbanoId,
      bairroId,
      rua,
    } = req.body;

    const enderecoInexistente = await Endereco.findByPk(id);
    if (!enderecoInexistente) {
      return res.status(400).json({ message: "Este endereco não existe" });
    }

    const enderecoUpdate = await Endereco.update(
      {
        provinciaId,
        municipioId,
        distritoUrbanoId,
        bairroId,
        rua,
      },
      { where: { id } }
    );
    return res.json({ message: "Actualizado com sucesso" });
  },

  //
};
