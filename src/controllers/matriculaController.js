const Matricula = require("../models/Matriculas");

module.exports = {
  //
  async index(req, res) {
    const MatriculaAll = await Matricula.findAll();
    if (MatriculaAll == 0) {
      return res.status(400).json({ message: "Não existe nenhum professor" });
    }
    return res.json(MatriculaAll);
  },
  //

  async store(req, res) {
    const { nome, email, dataNascimento, bi, enderecoId, generoId } = req.body;

    if (nome === "") {
      return res.status(400).json({ message: "Digite o seu nome, por favor!" });
    }

    if (email === "") {
      return res.status(400).json({ message: "Digite sua email, por favor!" });
    }
    if (dataNascimento === "") {
      return res
        .status(400)
        .json({ message: "Digite sua data de nascimento, por favor!" });
    }
    if (bi === "") {
      return res.status(400).json({ message: "Digite seu bi, por favor!" });
    }

    const matricula = await Matricula.create({
      nome,
      email,
      dataNascimento,
      bi,
      enderecoId,
      generoId,
    });

    return res.json(matricula);
  },

  //
  async delete(req, res) {
    const { id } = req.params;
    const MatriculaDelete = await Matriculas.destroy({ where: { id } });
    if (!MatriculaDelete) {
      return res.json({ message: "Este dado não existe" });
    }
    return res.json({ message: "Excluído com sucesso" });
  },

  //

  async update(req, res) {
    const { id } = req.params;
    const { nome, email, dataNascimento, bi, enderecoId, generoId } = req.body;

    const matriculaInexistente = await Matricula.findByPk(id);
    if (!matriculaInexistente) {
      return res.status(400).json({ message: "Esta matricula não existe" });
    }

    const matriculaUpdate = await Matricula.update(
      {
        nome,
        email,
        dataNascimento,
        bi,
        enderecoId,
        generoId,
      },
      { where: { id } }
    );
    return res.json(matriculaUpdate + { message: "Actualizado com sucesso" });
  },
  //
};
