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
-- Table structure for table `enderecos`
--

DROP TABLE IF EXISTS `enderecos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enderecos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `provinciaId` int(11) NOT NULL,
  `municipioId` int(11) NOT NULL,
  `distritoUrbanoId` int(11) NOT NULL,
  `bairroId` int(11) NOT NULL,
  `rua` varchar(30) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `enderecos_provinciaId_foreign_idx` (`provinciaId`),
  KEY `enderecos_municipioId_foreign_idx` (`municipioId`),
  KEY `enderecos_distritoUrbanoId_foreign_idx` (`distritoUrbanoId`),
  KEY `enderecos_bairroId_foreign_idx` (`bairroId`),
  CONSTRAINT `enderecos_bairroId_foreign_idx` FOREIGN KEY (`bairroId`) REFERENCES `bairros` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `enderecos_distritoUrbanoId_foreign_idx` FOREIGN KEY (`distritoUrbanoId`) REFERENCES `distritourbanos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `enderecos_municipioId_foreign_idx` FOREIGN KEY (`municipioId`) REFERENCES `municipios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `enderecos_provinciaId_foreign_idx` FOREIGN KEY (`provinciaId`) REFERENCES `provincias` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enderecos`
--

LOCK TABLES `enderecos` WRITE;
/*!40000 ALTER TABLE `enderecos` DISABLE KEYS */;
INSERT INTO `enderecos` VALUES (3,1,1,1,2,'Maboque','2021-03-08 12:38:16','2021-03-08 12:38:16'),(4,1,1,1,2,'Abacateiro','2021-03-08 13:39:30','2021-03-08 14:01:49');
/*!40000 ALTER TABLE `enderecos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-09  5:58:34
