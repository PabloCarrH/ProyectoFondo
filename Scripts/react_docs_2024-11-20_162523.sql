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
-- Table structure for table `docs`
--

DROP TABLE IF EXISTS `docs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `docs` (
  `Nombre` varchar(50) NOT NULL,
  `Correo` varchar(50) NOT NULL,
  `solicitud` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `docs`
--

/*!40000 ALTER TABLE `docs` DISABLE KEYS */;
INSERT INTO `docs` VALUES ('Carlos Pérez','carlos@example.com','Solicitud de documentos para la firma de contrato'),('Ana Gómez','ana@example.com','Solicitud de verificación de identidad'),('Luis Fernández','luis@example.com','Envío de documentación para postulación'),('María López','maria@example.com','Solicitud de respaldo de pago'),('Pedro Sánchez','pedro@example.com','Solicitud de certificado laboral'),('Laura Martínez','laura@example.com','Envío de documentos de empresa'),('José Rodríguez','jose@example.com','Solicitud de revisión de contrato'),('Marta Díaz','marta@example.com','Envío de información adicional'),('Carlos González','carlosg@example.com','Solicitud de carta de recomendación'),('Patricia López','patricia@example.com','Solicitud de revisión de documentos fiscales'),('Andrés Sánchez','andres@example.com','Solicitud de constancia de empleo'),('Carmen Pérez','carmen@example.com','Envío de datos bancarios'),('Felipe Hernández','felipe@example.com','Solicitud de carta de aceptación'),('Javier Martín','javier@example.com','Envío de solicitud de registro'),('Elena Rodríguez','elena@example.com','Solicitud de información de precios'),('Francisco López','francisco@example.com','Solicitud de transacción bancaria'),('Ricardo González','ricardo@example.com','Solicitud de documentos personales'),('Esteban Díaz','esteban@example.com','Envío de documentos de identificación'),('Patricia Martínez','patricia.m@example.com','Solicitud de factura de pago'),('Oscar García','oscar@example.com','Solicitud de devolución de dinero'),('Sofía Sánchez','sofia@example.com','Solicitud de actualización de datos'),('Antonio Pérez','antonio@example.com','Solicitud de extracto bancario'),('Victoria Gómez','victoria@example.com','Envío de documentos fiscales'),('Luis Romero','luis.romero@example.com','Solicitud de documentación para solicitud de crédito'),('José Mendoza','jose.mendoza@example.com','Envío de plan de negocios'),('Lorena Martínez','lorena@example.com','Solicitud de carta de recomendación'),('Felipe López','felipe.l@example.com','Envío de plan de inversión'),('Raquel Rodríguez','raquel@example.com','Solicitud de consulta de productos'),('Juan Sánchez','juan@example.com','Envío de solicitudes varias'),('Beatriz Pérez','beatriz@example.com','Solicitud de pago de servicios');
/*!40000 ALTER TABLE `docs` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-20 16:25:24
