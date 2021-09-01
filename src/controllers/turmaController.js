const Turma = require('../models/Turma');
const Curso = require('../models/Curso');
const GrauAcademico = require('../models/grauAcademico');
const DirectorDeTurma = require('../models/directorTurma');

module.exports = {

//
    async showCursoTurma(req, res){

        const { cursoId } = req.params;
        const curso = await Curso.findByPk(cursoId , {
            include: { 
                association: 'Turma',
            }
        });

        if(!curso){
            return res.status(400).json({ message: 'Esse curso não existe' });
        }

        return res.json(curso);
    },
//
    async showGrauTurma(req, res){

        const { grauAcademicoId } = req.params;
        const grau = await GrauAcademico.findByPk(grauAcademicoId , {
            include: { 
                association: 'Turma',
            }
        });

        if(!grau){
            return res.status(400).json({ message: 'Esse grau acadêmico não existe' });
        }

        return res.json(grau);
    },
//

//
async showDirectorTurma(req, res){

    const { directorTurmaId } = req.params;
    const director = await DirectorDeTurma.findByPk(directorTurmaId, {
        include: { 
            association: 'Turma',
        }
    });

    if(!director){
        return res.status(400).json({ message: 'Esse director de turma não existe' });
    }

    return res.json(director);
},
//

    async index(req, res){
        
        const turmaAll = await Turma.findAll();
        if(turmaAll==0){
            return res.status(400).json({ message: 'Não existe nenhuma turma'});
        }
        return res.json(turmaAll);
    },

//
    async store(req, res){

        const { directorTurmaId, cursoId, grauAcademicoId, designacao } = req.body;

        const curso = await Curso.findByPk(cursoId);
        if(!curso){
            return res.status(400).json({ message: 'Este curso não existe' });
        }

        const grau = await GrauAcademico.findByPk(grauAcademicoId);
        if(!grau){
            return res.status(400).json({ message: 'Este grau acadêmico não existe' });
        }

        const director = await DirectorDeTurma.findByPk(directorTurmaId);
        if(!director){
            return res.status(400).json({ message: 'Este director de turma não existe' });
        }

        if(designacao===""){
            return res.status(400).json({ message: 'Digite a designacao, por favor!' });   
        }
        
        const turmaDesignacao = await Turma.findOne({ where: {directorTurmaId, cursoId, grauAcademicoId, designacao}});
        if(turmaDesignacao!=null){
            return res.status(400).json({ message: 'Esta turma já existe'});
        }

        
        const turmaCreate = await Turma.create({ directorTurmaId,cursoId, grauAcademicoId, designacao});
        
        return res.json({message: 'Dados inseridos com sucesso'});
      
},
    
//

async delete(req, res){

    const { cursoId, grauAcademicoId, designacao } = req.body;
    const turmaDelete = await Turma.destroy({where: {cursoId, grauAcademicoId, designacao}});
    if(!turmaDelete){
        return res.json({message: 'Este dado não existe'});
    }

    return res.json({message: 'Excluído com sucesso'});
},

//
async update(req, res){

    const { id, cursoId, grauAcademicoId, designacao } = req.body;
    
    const turmaInexistente = await Turma.findByPk(id);
    if(!turmaInexistente){
        return res.status(400).json({ message: 'Esta turma não existe' });
    }

    const turmaDesignacao = await Turma.findOne({ where: {id, cursoId, grauAcademicoId, designacao}});
    if(turmaDesignacao!=null){
        return res.status(400).json({ message: 'Esta turma já existe'});
    }

    const turmaUpdate = await Turma.update({designacao}, {where: { id }});
    return res.json({message: 'Actualizado com sucesso'});

}


//

    
}