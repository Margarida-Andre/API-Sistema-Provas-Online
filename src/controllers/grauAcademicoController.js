const GrauAcademico = require('../models/grauAcademico');


module.exports = {

//
    async index(req, res){
        
        const grauAll = await GrauAcademico.findAll();
        if(grauAll==0){
            return res.status(400).json({ message: 'Não existe nenhum grau acadêmico'});
        }
        return res.json(grauAll);
    },
//

    async store(req, res){

        const { designacao } = req.body;

        if(designacao===" "){
            return res.status(400).json({ message: 'Digite a designacao, por favor!' });   
        }
        
        const grauNome = await GrauAcademico.findOne({ where: {designacao}});
        if(grauNome!=null){
            return res.status(400).json({ message: 'Este grau acadêmico já existe'});
        }
        
        const grauCreate = await GrauAcademico.create({designacao});
        return res.json(grauCreate);
      
}, 
//

async delete(req, res){

    const { designacao } = req.body;
    const grauDelete = await GrauAcademico.destroy({where: {designacao}});
    if(!grauDelete){
        return res.json({message: 'Este dado não existe'});
    }
    return res.json({message: 'Excluído com sucesso'});
},
//

async update(req, res){

    const { id, designacao } = req.body;
    
    const grauInexistente = await GrauAcademico.findByPk(id);
    if(!grauInexistente ){
        return res.status(400).json({ message: 'Este grau acadêmico não existe' });
    }

    const grauNome = await GrauAcademico.findOne({ where: {designacao}});
        if(grauNome!=null){
            return res.status(400).json({ message: 'Este grau acadêmico já existe'});
        }

    const grauUpdate = await GrauAcademico.update({designacao}, {where: { id }});
    return res.json({message: 'Actualizado com sucesso'});

}
//


    
}