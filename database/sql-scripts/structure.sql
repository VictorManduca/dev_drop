-- MySQL dump 10.13  Distrib 8.0.20, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: DropDB
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE `DropDB`;
USE `DropDB`;

--
-- Table structure for table `arquivos`
--

DROP TABLE IF EXISTS `arquivos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `arquivos` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `UsuarioID` int DEFAULT NULL,
  `Arquivo` varchar(255) DEFAULT NULL,
  `eFavorito` tinyint DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `arquivos` (`UsuarioID`),
  CONSTRAINT `arquivos_ibfk_1` FOREIGN KEY (`UsuarioID`) REFERENCES `usuario` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `ArquivoID` int DEFAULT NULL,
  `UsuarioID` int DEFAULT NULL,
  `TipoCategoriaID` int DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `ArquivoID` (`ArquivoID`),
  KEY `UsuarioID` (`UsuarioID`),
  KEY `TipoCategoriaID` (`TipoCategoriaID`),
  CONSTRAINT `categoria_ibfk_1` FOREIGN KEY (`ArquivoID`) REFERENCES `arquivos` (`ID`),
  CONSTRAINT `categoria_ibfk_2` FOREIGN KEY (`UsuarioID`) REFERENCES `usuario` (`ID`),
  CONSTRAINT `categoria_ibfk_3` FOREIGN KEY (`TipoCategoriaID`) REFERENCES `tipo_categoria` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `planos`
--

DROP TABLE IF EXISTS `planos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `planos` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(255) DEFAULT NULL,
  `Preco` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tipo_categoria`
--

DROP TABLE IF EXISTS `tipo_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_categoria` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Indice` int DEFAULT NULL,
  `Descricao` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Senha` varchar(255) DEFAULT NULL,
  `Token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `vinculo_planos_usuario`
--

DROP TABLE IF EXISTS `vinculo_planos_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vinculo_planos_usuario` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `UsuarioID` int DEFAULT NULL,
  `PlanosID` int DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `UsuarioID` (`UsuarioID`),
  KEY `PlanosID` (`PlanosID`),
  CONSTRAINT `vinculo_planos_usuario_ibfk_1` FOREIGN KEY (`UsuarioID`) REFERENCES `usuario` (`ID`),
  CONSTRAINT `vinculo_planos_usuario_ibfk_2` FOREIGN KEY (`PlanosID`) REFERENCES `planos` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `vinculo_usuario_pagamento`
--

DROP TABLE IF EXISTS `vinculo_usuario_pagamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vinculo_usuario_pagamento` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `VinculoPlanoUsuarioID` int DEFAULT NULL,
  `ApiToken` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `VinculoPlanoUsuarioID` (`VinculoPlanoUsuarioID`),
  CONSTRAINT `vinculo_usuario_pagamento_ibfk_1` FOREIGN KEY (`VinculoPlanoUsuarioID`) REFERENCES `vinculo_planos_usuario` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-14 20:32:50
