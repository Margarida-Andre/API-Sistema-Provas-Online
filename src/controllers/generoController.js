const Genero = require('../models/Genero');


module.exports = {

//
    async index(req, res){
        
        const generoAll = await Genero.findAll();
        if(generoAll==0){
            return res.status(400).json({ message: 'Não existe nenhum gênero'});
        }
        return res.json(generoAll);
    },

//
    async store(req, res){

        const { designacao } = req.body;

        if(designacao===" "){
            return res.status(400).json({ message: 'Digite a designacao, por favor!' });   
        }
        
        const generoNome = await Genero.findOne({ where: {designacao}});
        if(generoNome!=null){
            return res.status(400).json({ message: 'Este gênero já existe'});
        }
        
        const generoCreate = await Genero.create({designacao});
        return res.json(generoCreate);
      
}, 

//

async delete(req, res){

    const { designacao } = req.body;
    const generoDelete = await Genero.destroy({where: {designacao}});
    if(!generoDelete){
        return res.json({message: 'Este dado não existe'});
    }
    return res.json({message: 'Excluído com sucesso'});
},

//

async update(req, res){

    const { id, designacao } = req.body;
    
    const generoInexistente = await Genero.findByPk(id);
    if(!generoInexistente ){
        return res.status(400).json({ message: 'Este gênero não existe' });
    }

    const generoNome = await Genero.findOne({ where: {designacao}});
        if(generoNome!=null){
            return res.status(400).json({ message: 'Este gênero já existe'});
        }

    const generoUpdate = await Genero.update({designacao}, {where: { id }});
    return res.json({message: 'Actualizado com sucesso'});

}

//

    
}