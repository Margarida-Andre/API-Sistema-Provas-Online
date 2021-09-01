const Prova = require("../models/sistemaamericanoProvas");
const Professor = require("../models/Professor");

module.exports = {

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
    const { id } = req.headers;
 
    const {
      titulo,
      dataProva,
      horaInicio,
      horaFinal,
  } = req.body;

  const professorId = await Professor.findByPk(id);

    if(!professorId){
      return res
      .status(400)
      .json({ message: "Professor não existe!" });
    }
    
   

    if (titulo === "") {
      return res
        .status(400)
        .json({ message: "Digite o título da prova, por favor!" });
    }

    if (dataProva === "") {
      return res
        .status(400)
        .json({ message: "Digite a data da prova, por favor!" });
    }

    if (horaInicio === "") {
      return res
        .status(400)
        .json({ message: "Digite o horário do início, por favor!" });
    }

    if (horaFinal === "") {
      return res
        .status(400)
        .json({ message: "Digite o horário do final, por favor!"  });
    }

    const ProvaCreate = await Prova.create({
      professorId: id,
      titulo,
      dataProva,
      horaInicio,
      horaFinal,
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
      professorId,
      titulo,
      dataProva,
      horaInicio,
      horaFinal,
    } = req.body;

    const provaInexistente = await Prova.findByPk(id);
    if (!provaInexistente) {
      return res.status(400).json({ message: "Esta prova não existe" });
    }

    const provaUpdate = await Prova.update(
      {
        professorId,
        titulo,
        dataProva,
        horaInicio,
        horaFinal,
      },
      { where: { id } }
    );

    return res.json({ message: "Actualizado com sucesso" });
  },

  //
};
