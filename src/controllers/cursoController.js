const Curso = require('../models/Curso');
const AreaCurso = require('../models/areaCurso');



module.exports = {

//
    async show(req, res){

        const { areaCursoId } = req.params;
        const areaCurso = await AreaCurso.findByPk(areaCursoId , {
            include: { 
                association: 'Curso',
            }
        });

        if(!areaCurso){
            return res.status(400).json({ message: 'Essa área não existe' });
        }

        return res.json(areaCurso);
    },
//

    async index(req, res){
        
        const cursoAll = await Curso.findAll();
        if(cursoAll==0){
            return res.status(400).json({ message: 'Não existe nenhum curso'});
        }
        return res.json(cursoAll);
    },

//
    async store(req, res){
        
        const { areaCursoId, designacao } = req.body;

        
        if(designacao===" "){
            return res.status(400).json({ message: 'Digite a designação, por favor!' });   
        }

        const CursoNome = await Curso.findOne({ where: {designacao}});
        if(CursoNome!=null){
            return res.status(400).json({ message: 'Este curso já existe'});
        }
        const cursoCreate = await Curso.create({ areaCursoId, designacao});
        
        return res.json(cursoCreate);
      
},

//
async delete(req, res){

    const { areaCursoId, designacao } = req.body;
    const cursoDelete = await Curso.destroy({where: { areaCursoId, designacao}});
    if(!cursoDelete){
        return res.json({message: 'Este dado não existe'});
    }
    return res.json({message: 'Excluído com sucesso'});
},
//

async update(req, res){

    const { id, areaCursoId, designacao } = req.body;
    
    const cursoInexistente = await Curso.findByPk(id);
    if(!cursoInexistente){
        return res.status(400).json({ message: 'Este curso não existe' });
    }

    const CursoNome = await Curso.findOne({ where: { areaCursoId, designacao }});
    if(CursoNome!=null){
        return res.status(400).json({ message: 'Este curso já existe'});
    }

    const cursoUpdate = await Curso.update({areaCursoId, designacao}, {where: { id }});
    return res.json({message: 'Actualizado com sucesso'});

}
//

    
};