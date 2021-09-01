const TipoProva = require('../models/tipoProva');


module.exports = {

//
    async index(req, res){
        
        const tipoProvaAll = await TipoProva.findAll();
        if(tipoProvaAll==0){
            return res.status(400).json({ message: 'Não existe nenhum tipo de prova'});
        }
        return res.json(tipoProvaAll);
    },
//

    async store(req, res){

        const { designacao } = req.body;

        if(designacao===""){
            return res.status(400).json({ message: 'Digite a designacao, por favor!' });   
        }
        
        const tipoProva = await TipoProva.findOne({ where: {designacao}});
        if(tipoProva!=null){
            return res.status(400).json({ message: 'Este tipo de prova já existe'});
        }
        
        const tipoProvaCreate = await TipoProva.create({designacao});
        return res.json(tipoProvaCreate);
      
}, 
//

async delete(req, res){

    const { designacao } = req.body;
    const tipoProvaDelete = await TipoProva.destroy({where: {designacao}});
    if(!tipoProvaDelete){
        return res.json({message: 'Este dado não existe'});
    }
    return res.json({message: 'Excluído com sucesso'});
},

//

async update(req, res){

    const { id, designacao } = req.body;
    
    const tipoProvaInexistente = await TipoProva.findByPk(id);
    if(!tipoProvaInexistente ){
        return res.status(400).json({ message: 'Este tipo de prova não existe' });
    }

    const tipoProva = await TipoProva.findOne({ where: {designacao}});
    if(tipoProva!=null){
        return res.status(400).json({ message: 'Este tipo de prova já existe'});
    }

    const tipoProvaUpdate = await TipoProva.update({designacao}, {where: { id }});
    return res.json({message: 'Actualizado com sucesso'});

}

//

    
}