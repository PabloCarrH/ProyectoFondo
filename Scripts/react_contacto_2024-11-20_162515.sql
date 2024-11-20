-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: react
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

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

--
-- Table structure for table `contacto`
--

DROP TABLE IF EXISTS `contacto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contacto` (
  `Nombre` text NOT NULL,
  `Telefono` bigint(20) NOT NULL,
  `Pais` varchar(50) NOT NULL,
  `Correo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacto`
--

/*!40000 ALTER TABLE `contacto` DISABLE KEYS */;
INSERT INTO `contacto` VALUES ('Carlos Pérez',1234567890,'Colombia','carlos@example.com'),('Ana Gómez',9876543210,'México','ana@example.com'),('Luis Fernández',1122334455,'España','luis@example.com'),('María López',6677889900,'Argentina','maria@example.com'),('Pedro Sánchez',5566778899,'Chile','pedro@example.com'),('Laura Martínez',4433221100,'Perú','laura@example.com'),('José Rodríguez',1231231234,'Colombia','jose@example.com'),('Marta Díaz',3213213210,'México','marta@example.com'),('Carlos González',5554443333,'España','carlosg@example.com'),('Patricia López',4443332222,'Argentina','patricia@example.com'),('Andrés Sánchez',6667778888,'Chile','andres@example.com'),('Carmen Pérez',1112223333,'Colombia','carmen@example.com'),('Felipe Hernández',2223334444,'México','felipe@example.com'),('Javier Martín',3334445555,'España','javier@example.com'),('Elena Rodríguez',4445556666,'Argentina','elena@example.com'),('Francisco López',5556667777,'Chile','francisco@example.com'),('Ricardo González',6667778888,'Colombia','ricardo@example.com'),('Esteban Díaz',7778889999,'México','esteban@example.com'),('Patricia Martínez',8889990000,'España','patricia.m@example.com'),('Oscar García',9990001111,'Argentina','oscar@example.com'),('Sofía Sánchez',1230984567,'Chile','sofia@example.com'),('Antonio Pérez',2349876543,'Colombia','antonio@example.com'),('Victoria Gómez',9871204567,'México','victoria@example.com'),('Luis Romero',7896541230,'España','luis.romero@example.com'),('José Mendoza',3210987654,'Argentina','jose.mendoza@example.com'),('Lorena Martínez',6547894321,'Chile','lorena@example.com'),('Felipe López',5551239876,'Colombia','felipe.l@example.com'),('Raquel Rodríguez',6677889990,'México','raquel@example.com'),('Juan Sánchez',3344556677,'España','juan@example.com'),('Beatriz Pérez',4433221101,'Argentina','beatriz@example.com');
/*!40000 ALTER TABLE `contacto` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-20 16:25:17
