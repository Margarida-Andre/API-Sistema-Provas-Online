const express = require("express");
const ProvinciaController = require("./controllers/provinciaController");
const MunicipioController = require("./controllers/municipioController");
const DistritoUrbanoController = require("./controllers/distritoUrbanoController");
const BairroController = require("./controllers/bairroController");
const EnderecoController = require("./controllers/enderecoController");
const AreaCursoController = require("./controllers/areaCursoController");
const GeneroController = require("./controllers/generoController");
const GrauAcademicoController = require("./controllers/grauAcademicoController");
const TipoContactoController = require("./controllers/tipoContactoController");
const TipoProvaController = require("./controllers/tipoProvaController");
const CursoController = require("./controllers/cursoController");
const TurmaController = require("./controllers/turmaController");
const InstituicaoController = require("./controllers/instituicoesController");
const EstudanteController = require("./controllers/estudanteController");
const ProfessorController = require("./controllers/professorController");
const ContactoEstController = require("./controllers/contactoEstController");
const ContactoProfController = require("./controllers/contactoProfController");
const ProvaController = require("./controllers/provaController");
const DisciplinaController = require("./controllers/disciplinaController");
const DirectorTurmaController = require("./controllers/directorTurmaController");
const RespostaController = require("./controllers/respostaController");
const PerguntaController = require("./controllers/perguntaController");
const SAProvaController = require("./controllers/sistemaamericanoProvaController");
const SAQuestaoController = require("./controllers/sistemaamericanoQuestaoController");
const MatriculaController = require("./controllers/matriculaController");
const routes = express.Router();

//provincia
routes.get("/provinciaAll", ProvinciaController.index);
routes.post("/provinciaCreate", ProvinciaController.store);
routes.delete("/provinciaDelete", ProvinciaController.delete);
routes.patch("/provinciaUpdate", ProvinciaController.update);

//municipio
routes.get("/municipio/:provinciaId", MunicipioController.show);
routes.get("/municipioAll", MunicipioController.index);
routes.post("/municipioCreate", MunicipioController.store);
routes.delete("/municipioDelete", MunicipioController.delete);
routes.patch("/municipioUpdate", MunicipioController.update);

//distritoUrbano
routes.get("/distritoUrbano/:municipioId", DistritoUrbanoController.show);
routes.get("/distritoUrbanoAll", DistritoUrbanoController.index);
routes.post("/distritoUrbanoCreate", DistritoUrbanoController.store);
routes.delete("/distritoUrbanoDelete", DistritoUrbanoController.delete);
routes.patch("/distritoUpdate", DistritoUrbanoController.update);

//bairro
routes.get("/bairro/:distritoUrbanoId", BairroController.show);
routes.get("/bairroAll", BairroController.index);
routes.post("/bairroCreate", BairroController.store);
routes.delete("/bairroDelete", BairroController.delete);
routes.patch("/bairroUpdate", BairroController.update);

//endereco
routes.get("/enderecoAll", EnderecoController.index);
routes.post("/enderecoCreate", EnderecoController.store);
routes.delete("/enderecoDelete", EnderecoController.delete);
routes.patch("/enderecoUpdate", EnderecoController.update);

//areaCurso
routes.get("/areacursoAll", AreaCursoController.index);
routes.post("/areacursoCreate", AreaCursoController.store);
routes.delete("/areaDelete", AreaCursoController.delete);
routes.patch("/areaUpdate", AreaCursoController.update);

//genero
routes.get("/generoAll", GeneroController.index);
routes.post("/generoCreate", GeneroController.store);
routes.delete("/generoDelete", GeneroController.delete);
routes.patch("/generoUpdate", GeneroController.update);

//grauAcademico
routes.get("/grauAcademicoAll", GrauAcademicoController.index);
routes.post("/grauAcademicoCreate", GrauAcademicoController.store);
routes.delete("/grauAcademicoDelete", GrauAcademicoController.delete);
routes.patch("/grauAcademicoUpdate", GrauAcademicoController.update);

//tipoContacto
routes.get("/tipoContactoAll", TipoContactoController.index);
routes.post("/tipoContactoCreate", TipoContactoController.store);
routes.delete("/tipoContactoDelete", TipoContactoController.delete);
routes.patch("/tipoContactoUpdate", TipoContactoController.update);

//tipoProva
routes.get("/tipoProvaAll", TipoProvaController.index);
routes.post("/tipoProvaCreate", TipoProvaController.store);
routes.delete("/tipoProvaDelete", TipoProvaController.delete);
routes.patch("/tipoProvaUpdate", TipoProvaController.update);

//curso
routes.get("/curso/:areaCursoId", CursoController.show);
routes.get("/cursoAll", CursoController.index);
routes.post("/cursoCreate", CursoController.store);
routes.delete("/cursoDelete", CursoController.delete);
routes.patch("/cursoUpdate", CursoController.update);

//turma
routes.get("/turmaCurso/:cursoId", TurmaController.showCursoTurma);
routes.get("/turmaGrau/:grauAcademicoId", TurmaController.showGrauTurma);
routes.get(
  "/turmaDirector/:directorTurmaId",
  TurmaController.showDirectorTurma
);
routes.get("/turmaAll", TurmaController.index);
routes.post("/turmaCreate", TurmaController.store);
routes.delete("/turmaDelete", TurmaController.delete);
routes.patch("/turmaUpdate", TurmaController.update);

//instituicao
routes.get("/instituicaoAll", InstituicaoController.index);
routes.post("/instituicaoCreate", InstituicaoController.store);
routes.post("/instituicaoLogin", InstituicaoController.storeLogin);
routes.delete("/instituicaoDelete", InstituicaoController.delete);
routes.patch("/instituicaoUpdate", InstituicaoController.update);

//Estudante
routes.get("/estudanteAll", EstudanteController.index);
routes.post("/estudanteCreate", EstudanteController.store);
routes.delete("/estudanteDelete", EstudanteController.delete);
routes.patch("/estudanteUpdate", EstudanteController.update);

//Professor
routes.get("/professorAll", ProfessorController.index);
routes.get("/tklogin", ProfessorController.tkindex);
routes.post("/professorCreate", ProfessorController.store);
routes.post("/professorLogin", ProfessorController.storeLoginProf);
routes.delete("/professorDelete", ProfessorController.delete);
routes.delete("/professorDelete/turma", ProfessorController.deleteTurma);
routes.delete("/professorDelete/curso", ProfessorController.deleteCurso);
routes.patch("/professorUpdate", ProfessorController.update);

//Matricula
routes.get("/matriculaAll", MatriculaController.index);
routes.post("/matriculaCreate", MatriculaController.store);
routes.delete("/matriculaDelete/:id", MatriculaController.delete);
routes.patch("/matriculaUpdate/:id", MatriculaController.update);

//ContactosEstudante
routes.get("/contactoEst/:tipoContactoId", ContactoEstController.show);
routes.get("/contactoEstAll", ContactoEstController.index);
routes.post("/contactoEstCreate", ContactoEstController.store);
routes.delete("/contactoEstDelete", ContactoEstController.delete);
routes.patch("/contactoEstUpdate", ContactoEstController.update);

//ContactosProfessor
routes.get("/contactoProf/:tipoContactoId", ContactoProfController.show);
routes.get("/contactoProfAll", ContactoProfController.index);
routes.post("/contactoProfCreate", ContactoProfController.store);
routes.delete("/contactoProfDelete", ContactoProfController.delete);
routes.patch("/contactoProfUpdate", ContactoProfController.update);

/*Prova
//routes.get("/prova/:professorId", ProvaController.show);
routes.get("/provaAll", ProvaController.index);
routes.post("/provaCreate", ProvaController.store);
routes.delete("/provaDelete/:id", ProvaController.delete);
routes.patch("/provaUpdate", ProvaController.update);*/

//SAProva
routes.get("/prova/:professorId", SAProvaController.show);
routes.get("/provaAll", SAProvaController.index);
routes.post("/provaCreate", SAProvaController.store);
routes.delete("/provaDelete/:id", SAProvaController.delete);
routes.patch("/provaUpdate", SAProvaController.update);

//SAQuestao
routes.get("/questao/:professorId", SAQuestaoController.show);
routes.get("/questaoAll", SAQuestaoController.index);
routes.post("/questaoCreate", SAQuestaoController.store);
routes.delete("/questaoDelete/:id", SAQuestaoController.delete);
routes.patch("/questaoUpdate", SAQuestaoController.update);


//Disciplina
routes.get("/disciplina/:professorId", DisciplinaController.show);
routes.get("/disciplinaAll", DisciplinaController.index);
routes.post("/disciplinaCreate", DisciplinaController.store);
routes.delete("/disciplinaDelete", DisciplinaController.delete);

routes.patch("/disciplinaUpdate", DisciplinaController.update);

//DirectorDeTurma
routes.get("/directorDeturmaAll", DirectorTurmaController.index);
routes.post("/directorDeturmaCreate", DirectorTurmaController.store);
routes.delete("/directorDeturmaDelete", DirectorTurmaController.delete);
routes.patch("/directorDeturmaUpdate", DirectorTurmaController.update);

//Respostas
routes.get("/respostaAll", RespostaController.index);
routes.post("/respostaCreate", RespostaController.store);
routes.delete("/respostaDelete", RespostaController.delete);
routes.patch("/respostaUpdate", RespostaController.update);

//Perguntas
routes.get("/perguntaAll", PerguntaController.index);
routes.post("/perguntaCreate", PerguntaController.store);
routes.delete("/perguntaDelete", PerguntaController.delete);
routes.patch("/perguntaUpdate", PerguntaController.update);

module.exports = routes;
