const Instituicao = require("../models/Instituicao");

module.exports = {
  //
  async index(req, res) {
    const instituicaoAll = await Instituicao.findAll();
    if (instituicaoAll == 0) {
      return res
        .status(400)
        .json({ message: "Não existe nenhuma instituicao" });
    }
    return res.json(instituicaoAll);
  },

  //
  async store(req, res) {
    const { enderecoId, nomeInstituicao, email, senha } = req.body;

    if (nomeInstituicao === "") {
      return res
        .status(400)
        .json({ message: "Digite o nome da instituição, por favor!" });
    }

    if (email === "") {
      return res
        .status(400)
        .json({ message: "Digite o email da instituição, por favor!" });
    }

    if (senha === "") {
      return res.status(400).json({ message: "Digite sua senha, por favor!" });
    }

    const InstituicaoNome = await Instituicao.findOne({
      where: { nomeInstituicao },
    });
    if (InstituicaoNome != null) {
      return res.status(400).json({ message: "Esta instituição já existe" });
    }

    const InstituicaoCreate = await Instituicao.create({
      enderecoId,
      nomeInstituicao,
      email,
      senha,
    });
    return res.json(InstituicaoCreate);
  },
  //
  async storeLogin(req, res) {
    const { email, senha } = req.body;

    const instituicaoAll = await Instituicao.findAll({
      where: { email, senha },
    });

    if (!email) {
      return res.status(400).json({ message: "email incorecto" });
    }
    if (!senha) {
      return res.status(400).json({ message: "senha incorrecta" });
    }
    return res.status(400).json(instituicaoAll);
  },

  //
  async delete(req, res) {
    const { nomeInstituicao } = req.body;
    const instituicaoDelete = await Instituicao.destroy({
      where: { nomeInstituicao },
    });
    if (!instituicaoDelete) {
      return res.json({ message: "Este dado não existe" });
    }
    return res.json({ message: "Excluído com sucesso" });
  },
  //
  async update(req, res) {
    const { id, enderecoId, nomeInstituicao } = req.body;

    const intituicaoInexistente = await Instituicao.findByPk(id);
    if (!intituicaoInexistente) {
      return res.status(400).json({ message: "Esta instituicao não existe" });
    }

    const InstituicaoNome = await Instituicao.findOne({
      where: { enderecoId, nomeInstituicao },
    });
    if (InstituicaoNome != null) {
      return res.status(400).json({ message: "Esta instituição já existe" });
    }

    const instituicaoUpdate = await Instituicao.update(
      { enderecoId, nomeInstituicao },
      { where: { id } }
    );
    return res.json({ message: "Actualizado com sucesso" });
  },

  //
};
