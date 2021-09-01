const TipoContacto = require('../models/tipoContacto');


module.exports = {

//
    async index(req, res){
        
        const tipoContactoAll = await TipoContacto.findAll();
        if(tipoContactoAll==0){
            return res.status(400).json({ message: 'Não existe nenhum tipo de contacto'});
        }
        return res.json(tipoContactoAll);
    },

//
    async store(req, res){

        const { designacao } = req.body;

        if(designacao===""){
            return res.status(400).json({ message: 'Digite a designacao, por favor!' });   
        }
        
        const tipocontacto = await TipoContacto.findOne({ where: {designacao}});
        if(tipocontacto!=null){
            return res.status(400).json({ message: 'Este tipo de contacto já existe'});
        }
        
        const tipoContactoCreate = await TipoContacto.create({designacao});
        return res.json(tipoContactoCreate);
      
}, 
//

async delete(req, res){

    const { designacao } = req.body;
    const tipoContactoDelete = await TipoContacto.destroy({where: {designacao}});
    if(!tipoContactoDelete){
        return res.json({message: 'Este dado não existe'});
    }
    return res.json({message: 'Excluído com sucesso'});
},

//

async update(req, res){

    const { id, designacao } = req.body;
    
    const tipoContactoInexistente = await TipoContacto.findByPk(id);
    if(!tipoContactoInexistente ){
        return res.status(400).json({ message: 'Este tipo de contacto não existe' });
    }

    const tipocontacto = await TipoContacto.findOne({ where: {designacao}});
    if(tipocontacto!=null){
        return res.status(400).json({ message: 'Este tipo de contacto já existe'});
    }

    const tipoContactoUpdate = await TipoContacto.update({designacao}, {where: { id }});
    return res.json({message: 'Actualizado com sucesso'});

}
//

    
}