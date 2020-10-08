-- MySQL dump 10.17  Distrib 10.3.22-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: 127.0.0.1    Database: devDropDB
-- ------------------------------------------------------
-- Server version	10.5.5-MariaDB-1:10.5.5+maria~focal

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE devDropDB;
USE devDropDB;

--
-- Table structure for table `arquivos`
--

DROP TABLE IF EXISTS `arquivos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `arquivos` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `UsuarioID` int(11) DEFAULT NULL,
  `Arquivo` varchar(255) DEFAULT NULL,
  `eFavorito` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `arquivos` (`UsuarioID`),
  CONSTRAINT `arquivos` FOREIGN KEY (`UsuarioID`) REFERENCES `usuario` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `grupo`
--

DROP TABLE IF EXISTS `grupo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grupo` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `UsuarioID` int(11) DEFAULT NULL,
  `PastaID` int(11) DEFAULT NULL,
  `TipoCategoriaID` int(11) DEFAULT NULL,
  `ArquivoID` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `grupo_UsuarioID_fk` (`UsuarioID`),
  KEY `grupo_PastaID_fk` (`PastaID`),
  KEY `grupo_TipoCategoriaID_fk` (`TipoCategoriaID`),
  KEY `grupo_ArquivoID_fk` (`ArquivoID`),
  CONSTRAINT `grupo_ArquivoID_fk` FOREIGN KEY (`ArquivoID`) REFERENCES `arquivos` (`ID`),
  CONSTRAINT `grupo_PastaID_fk` FOREIGN KEY (`PastaID`) REFERENCES `pasta` (`ID`),
  CONSTRAINT `grupo_TipoCategoriaID_fk` FOREIGN KEY (`TipoCategoriaID`) REFERENCES `tipo_categoria` (`ID`),
  CONSTRAINT `grupo_UsuarioID_fk` FOREIGN KEY (`UsuarioID`) REFERENCES `usuario` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pasta`
--

DROP TABLE IF EXISTS `pasta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pasta` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ArquivoID` int(11) DEFAULT NULL,
  `UsuarioID` int(11) DEFAULT NULL,
  `TipoCategoriaID` int(11) DEFAULT NULL,
  `PermissaoID` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `pasta` (`ArquivoID`),
  KEY `pasta_UsuarioID_fk` (`UsuarioID`),
  KEY `pasta_TipoCategoriaID_fk` (`TipoCategoriaID`),
  KEY `pasta_PermissaoID_fk` (`PermissaoID`),
  CONSTRAINT `pasta` FOREIGN KEY (`ArquivoID`) REFERENCES `arquivos` (`ID`),
  CONSTRAINT `pasta_PermissaoID_fk` FOREIGN KEY (`PermissaoID`) REFERENCES `permissao` (`ID`),
  CONSTRAINT `pasta_TipoCategoriaID_fk` FOREIGN KEY (`TipoCategoriaID`) REFERENCES `tipo_categoria` (`ID`),
  CONSTRAINT `pasta_UsuarioID_fk` FOREIGN KEY (`UsuarioID`) REFERENCES `usuario` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `permissao`
--

DROP TABLE IF EXISTS `permissao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permissao` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `UsuarioID` int(11) DEFAULT NULL,
  `eAdministrador` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tipo_categoria`
--

DROP TABLE IF EXISTS `tipo_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_categoria` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Indice` int(11) DEFAULT NULL,
  `Descricao` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nome` varchar(50) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Senha` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-08 15:07:58
