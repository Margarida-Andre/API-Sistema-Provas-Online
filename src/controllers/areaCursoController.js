const AreaCurso = require('../models/areaCurso');


module.exports = {

//
    async index(req, res){
        
        const areaAll = await AreaCurso.findAll();
        if(areaAll==0){
            return res.status(400).json({ message: 'Não existe nenhuma área dos cursos'});
        }
        return res.json(areaAll);
    },

//
    async store(req, res){

        const { designacao } = req.body;

        if(designacao===""){
            return res.status(400).json({ message: 'Digite a designacao, por favor!' });   
        }
        
        const areaNome = await AreaCurso.findOne({ where: {designacao}});
        if(areaNome!=null){
            return res.status(400).json({ message: 'Esta area já existe'});
        }
        
        const areaCursoCreate = await AreaCurso.create({designacao});
        return res.json(areaCursoCreate);
      
}, 

//

async delete(req, res){

    const { designacao } = req.body;
    const areaDelete = await AreaCurso.destroy({where: {designacao}});
    if(!areaDelete){
        return res.json({message: 'Este dado não existe'});
    }
    return res.json({message: 'Excluído com sucesso'});
},

//

async update(req, res){

    const { id, designacao } = req.body;
    
    const areaInexistente = await AreaCurso.findByPk(id);
    if(!areaInexistente ){
        return res.status(400).json({ message: 'Esta área não existe' });
    }

    const areaNome = await AreaCurso.findOne({ where: {designacao}});
        if(areaNome!=null){
            return res.status(400).json({ message: 'Esta area já existe'});
        }

    const areaUpdate = await AreaCurso.update({designacao}, {where: { id }});
    return res.json({message: 'Actualizado com sucesso'});

}

//

    
}