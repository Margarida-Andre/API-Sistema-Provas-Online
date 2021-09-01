const DirectorTurma = require('../models/directorTurma');


module.exports = {

//
    async index(req, res){
        
        const directorAll = await DirectorTurma.findAll();
        if(directorAll==0){
            return res.status(400).json({ message: 'Não existe nenhum bairro'});
        }
        return res.json(directorAll);
    },


//
    async store(req, res){
        
        const { 
             professorId,
             nome,
            } = req.body;

        if(nome===""){
            return res.status(400).json({ message: 'Digite seu nome, por favor!' });   
        }

        const directorNome = await DirectorTurma.findOne({ where: {professorId}});
        if(directorNome!=null){
            return res.status(400).json({ message: 'Este director de turma já existe'});
        }
        const directorCreate = await DirectorTurma.create({ 
            professorId,
            nome,
        });
        
        return res.json(directorCreate);
      
},

//

async delete(req, res){

    const { professorId } = req.body;
    const directorDelete = await DirectorTurma.destroy({where: {professorId}});
    if(!directorDelete){
     return res.json({message: 'Este director de turma não existe'});
 }
    return res.json({message: 'Excluído com sucesso'});


},

//

async update(req, res){

    const { id, professorId, nome } = req.body;  
    
    const directorInexistente = await DirectorTurma.findByPk(id);
     if(!directorInexistente){
        return res.status(400).json({ message: 'Este director de turma não existe' });
    }

    const directorNome = await DirectorTurma.findOne({ where: {professorId, nome}});
    if(directorNome!=null){
        return res.status(400).json({ message: 'Este director de turma já existe'});
    }

    const directorUpdate = await DirectorTurma.update({ professorId, nome }, {where: { id }});
    return res.json({message: 'Actualizado com sucesso'});

   }
//
};