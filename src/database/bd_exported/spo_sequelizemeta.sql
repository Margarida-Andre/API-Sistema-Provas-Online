-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: spo
-- ------------------------------------------------------
-- Server version	5.7.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20210225182852-create-instituicoes.js'),('20210225190330-create-enderecos.js'),('20210225193743-create-provincias.js'),('20210225194151-create-municipios.js'),('20210225194833-create-distritoUrbanos.js'),('20210225195241-create-estudantes.js'),('20210225200934-create-professores.js'),('20210225203419-create-directorTurma.js'),('20210225203804-create-cursos.js'),('20210225204600-create-areaCursos.js'),('20210225210412-create-turmas.js'),('20210225211812-create-disciplinas.js'),('20210225212634-create-generos.js'),('20210225213726-create-contactoEstudantes.js'),('20210225213726-create-contactoProfessores.js'),('20210225214623-create-tipoContactos.js'),('20210225214939-create-cursoInstituicoes.js'),('20210225223400-create-provas.js'),('20210225225627-create-tipoProvas.js'),('20210225232707-create-disciplinaEstudantes.js'),('20210225232707-create-instituicao&areaCursos.js'),('20210225233200-create-disciplinaCursos.js'),('20210225235154-create-disciplinaTurmas.js'),('20210226000134-create-professorCursos.js'),('20210226000731-create-estudanteProfessores.js'),('20210226001157-create-professorTurmas.js'),('20210226001946-create-estudanteProvas.js'),('20210226003837-create-pautas.js'),('20210226005832-create-grauAcademicos.js'),('20210226015922-create-bairros.js'),('20210226130935-create-professorTurmas.js'),('20210226152649-create-areaCursoInstituicoes.js'),('20210226233906-add-foreignKey-field-to-instituicoes.js'),('20210227004503-add-foreignKey-field-to-enderecos.js'),('20210227005825-add-foreignKey-field-to-municipios.js'),('20210227012810-add-foreignKey-field-to-distritoUrbanos.js'),('20210227014005-add-foreignkey-field-to-estudantes.js'),('20210227015805-add-foreignkey-field-to-professores.js'),('20210227024855-add-foreignkey-field-to-directorTurmas.js'),('20210227030255-add-foreignkey-field-to-cursos.js'),('20210227030631-add-foreignkey-field-to-turmas.js'),('20210227031141-add-foreignkey-field-to-contactoEstudantes.js'),('20210227031141-add-foreignkey-field-to-contactoProfessores.js'),('20210227031939-add-foreignkey-field-to-cursoInstituicoes.js'),('20210227033014-add-foreignkey-field-to-provas.js'),('20210227033854-add-foreignkey-field-to-disciplinaEstudantes.js'),('20210227034208-add-foreingnkey-field-to-disciplinaCursos.js'),('20210227034725-add-foreignkey-field-to-disciplinaTurmas.js'),('20210227040102-add-foreignkey-field-to-estudanteProfessores.js'),('20210227040512-add-foreignkey-field-to-professorTurmas.js'),('20210227041203-add-foreignkey-field-to-estudanteProvas.js'),('20210227041852-add-foreignkey-field-to-pautas.js'),('20210227042116-add-foreignkey-field-to-bairros.js'),('20210305132818-add-foreignkey-field-to-disciplinas.js'),('20210305133150-create-professorCursos.js'),('20210305133432-add-foreignkey-field-to-instituicao&Areacursos.js'),('20210305133432-add-foreignkey-field-to-professorCursos.js'),('20210309005010-create-directorDeTurma.js'),('20210309010242-add-foreignKey-field-to-Turma.js'),('20210309015349-add-nome-field-to-directorTurma.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-09  5:58:16
