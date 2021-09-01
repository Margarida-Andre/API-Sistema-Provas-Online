const Bairro = require('../models/Bairro');
const distritoUrbano = require('../models/DistritoUrbano');


module.exports = {
    
    async show(req, res){

        const { distritoUrbanoId } = req.params;
        const distrito_urbano = await distritoUrbano.findByPk(distritoUrbanoId , {
            include: { 

                association: 'Bairro',
            }
        });

        if(!distrito_urbano){
            return res.status(400).json({ message: 'Esse distrito urbano não existe' });
        }

        return res.json(distrito_urbano);
    },

    async index(req, res){
        
        const bairroAll = await Bairro.findAll();
        if(bairroAll==0){
            return res.status(400).json({ message: 'Não existe nenhum bairro'});
        }
        return res.json(bairroAll);
    },


    async store(req, res){

        const { distritoUrbanoId, nome } = req.body;

        const distrito = await distritoUrbano.findByPk(distritoUrbanoId);
        if(!distrito){
            return res.status(400).json({ message: 'Este distrito não existe' });
        }

        if(nome===" "){
            return res.status(400).json({ message: 'Digite o nome, por favor!' });   
        }
        
        const BairroNome = await Bairro.findOne({ where: {distritoUrbanoId, nome}});
        if(BairroNome!=null){
            return res.status(400).json({ message: 'Este bairro já existe'});
        }
        
        const BairroCreate = await Bairro.create({distritoUrbanoId, nome});
        return res.json(BairroCreate);
      
}, 

async delete(req, res){

    const { distritoUrbanoId, nome } = req.body;
    const bairroDelete = await Bairro.destroy({where: {distritoUrbanoId, nome}});
    if(!bairroDelete){
        return res.json({message: 'Este dado não existe'});
    }
    return res.json({message: 'Excluído com sucesso'});
},

async update(req, res){

    const { id, distritoUrbanoId, nome } = req.body;
    
    const bairroInexistente = await Bairro.findByPk(id);
    if(!bairroInexistente){
        return res.status(400).json({ message: 'Este bairro não existe' });
    }

    const bairroNome = await Bairro.findOne({ where: {distritoUrbanoId,nome}});
        if(bairroNome!=null){
            return res.status(400).json({ message: 'Este bairro já existe'});
        }

    const bairroUpdate = await Bairro.update({ distritoUrbanoId, nome}, {where: { id }});
    return res.json({message: 'Actualizado com sucesso'});

}





    
}