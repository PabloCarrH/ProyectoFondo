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
-- Table structure for table `programas`
--

DROP TABLE IF EXISTS `programas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `programas` (
  `Nombre` varchar(50) NOT NULL,
  `Correo` varchar(50) NOT NULL,
  `Programa` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `programas`
--

/*!40000 ALTER TABLE `programas` DISABLE KEYS */;
INSERT INTO `programas` VALUES ('Carlos Pérez','carlos@example.com','Programa de Afiliación Premium'),('Ana Gómez','ana@example.com','Programa de Socios Empresariales'),('Luis Fernández','luis@example.com','Programa de Capacitación en Línea'),('María López','maria@example.com','Programa de Consultoría Exclusiva'),('Pedro Sánchez','pedro@example.com','Programa de Membresía VIP'),('Laura Martínez','laura@example.com','Programa de Beneficios Corporativos'),('José Rodríguez','jose@example.com','Programa de Gestión de Proyectos'),('Marta Díaz','marta@example.com','Programa de Asesoría Legal'),('Carlos González','carlosg@example.com','Programa de Inversiones para Empresas'),('Patricia López','patricia@example.com','Programa de Asistencia al Cliente'),('Andrés Sánchez','andres@example.com','Programa de Networking Empresarial'),('Carmen Pérez','carmen@example.com','Programa de Consultoría en Negocios'),('Felipe Hernández','felipe@example.com','Programa de Formación Profesional'),('Javier Martín','javier@example.com','Programa de Gestión Financiera'),('Elena Rodríguez','elena@example.com','Programa de Consultoría en Marketing'),('Francisco López','francisco@example.com','Programa de E-commerce para PYMES'),('Ricardo González','ricardo@example.com','Programa de Certificación de Productos'),('Esteban Díaz','esteban@example.com','Programa de Gestión de Recursos Humanos'),('Patricia Martínez','patricia.m@example.com','Programa de Capacitación Ejecutiva'),('Oscar García','oscar@example.com','Programa de Marketing Digital'),('Sofía Sánchez','sofia@example.com','Programa de Liderazgo Empresarial'),('Antonio Pérez','antonio@example.com','Programa de Formación en Ventas'),('Victoria Gómez','victoria@example.com','Programa de Investigación de Mercado'),('Luis Romero','luis.romero@example.com','Programa de Innovación Tecnológica'),('José Mendoza','jose.mendoza@example.com','Programa de Consultoría en Finanzas'),('Lorena Martínez','lorena@example.com','Programa de Asesoría Estratégica'),('Felipe López','felipe.l@example.com','Programa de Desarrollo de Productos'),('Raquel Rodríguez','raquel@example.com','Programa de Gestión de Proyectos Internacionales'),('Juan Sánchez','juan@example.com','Programa de Marketing para Empresas'),('Beatriz Pérez','beatriz@example.com','Programa de Capacitación en Comunicación');
/*!40000 ALTER TABLE `programas` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-20 16:25:27
