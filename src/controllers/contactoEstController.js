const ContactoEst = require('../models/ContactoEst');


module.exports = {

//
    async show(req, res){

        const { tipoContactoId } = req.params;
        const contacto = await ContactoEst.findAll( {where: {tipoContactoId}});
        if(contacto==0){
            return res.status(400).json({message: 'Este tipo de contacto não existe'});
        }

               return res.json(contacto);
    },
//

    async index(req, res){
        
        const contactoAll = await ContactoEst.findAll();
        if(contactoAll==0){
            return res.status(400).json({ message: 'Não existe nenhum contacto'});
        }
        return res.json(contactoAll);
    },
//

    async store(req, res){

        const { 
            tipoContactoId, 
            estudanteId, 
            infoContacto 
        } = req.body;

        if(infoContacto===""){
            return res.status(400).json({ message: 'Digite o contacto, por favor!' });   
        }
        
        const ContactoCreate = await ContactoEst.create({
            tipoContactoId, 
            estudanteId, 
            infoContacto
        });
        return res.json(ContactoCreate);
      
},
//
    async delete(req, res){

        const { id, infoContacto } = req.body;
        const contactoDelete = await ContactoEst.destroy({where: {id, infoContacto}});
        if(!contactoDelete){
            return res.json({message: 'Este contacto não existe'});
        }
        return res.json({message: 'Excluído com sucesso'});
},
//

async update(req, res){

    const { id, infoContacto } = req.body;
    
    const contactoInexistente = await ContactoEst.findByPk(id);
    if(!contactoInexistente){
        return res.status(400).json({ message: 'Este bairro não existe' });
    }

    const contactoUpdate = await Contacto.update({infoContacto}, {where: { id }});
    return res.json({message: 'Actualizado com sucesso'});

}

//


    
}