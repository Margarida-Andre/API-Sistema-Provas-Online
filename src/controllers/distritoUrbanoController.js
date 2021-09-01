const distritoUrbano = require('../models/DistritoUrbano');
const Municipio = require('../models/Municipio');

module.exports = {

//
    async show(req, res){

        const { municipioId } = req.params;
        const distrito_urbanosMunicipio = await Municipio.findByPk(municipioId, {
            include: {
                
                association: 'DistritoUrbano',

            }
        });

        if(!distrito_urbanosMunicipio){
            return res.status(400).json({ message: 'Esse município não existe' });
        }

        return res.json(distrito_urbanosMunicipio);
    },
//

    async index(req, res){
        
        const distritoAll = await distritoUrbano.findAll();
        if(distritoAll==0){
            return res.status(400).json({ message: 'Não existe nenhum distrito urbano'});
        }
        return res.json(distritoAll);
    },

//
    
    async store(req, res){
        
        const { municipioId, nome } = req.body;

        
        const municipio = await Municipio.findByPk(municipioId);
        if(!municipio){
            return res.status(400).json({ message: 'Este município não existe'});
        }
       
        if(nome===" "){
            return res.status(400).json({ message: 'Digite o nome, por favor!' });   
        }
        
        const distritoNome = await distritoUrbano.findOne({ where: {nome}});
        if(distritoNome!=null){
            return res.status(400).json({ message: 'Este distrito urbano já existe'});
        }
        
        const distritoCreate = await distritoUrbano.create({municipioId, nome});
        return res.json(distritoCreate);
      
},

//
    async delete(req, res){

        const { nome } = req.body;
        const distritoDelete = await distritoUrbano.destroy({where: {nome}});
        if(!distritoDelete){
            return res.json({message: 'Este dado não existe'});
        }
        return res.json({message: 'Excluído com sucesso'});
    },
//

    async update(req, res){

        const { id, municipioId, nome } = req.body;
        
        const distritoInexistente = await distritoUrbano.findByPk(id);
        if(!distritoInexistente){
            return res.status(400).json({ message: 'Este distrito não existe' });
        }

        const distritoNome = await distritoUrbano.findOne({ where: {nome}});
        if(distritoNome!=null){
            return res.status(400).json({ message: 'Este distrito urbano já existe'});
        }

        const distritoUpdate = await distritoUrbano.update({ municipioId, nome }, {where: { id }});
        return res.json({message: 'Actualizado com sucesso'});

    }

//
    };