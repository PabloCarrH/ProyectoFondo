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
-- Table structure for table `sugerencias`
--

DROP TABLE IF EXISTS `sugerencias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sugerencias` (
  `Nombre` varchar(50) NOT NULL,
  `Correo` varchar(50) NOT NULL,
  `sugerencia` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sugerencias`
--

/*!40000 ALTER TABLE `sugerencias` DISABLE KEYS */;
INSERT INTO `sugerencias` VALUES ('Carlos Pérez','carlos@example.com','Sería útil tener una opción para guardar los documentos enviados'),('Ana Gómez','ana@example.com','Me gustaría que el sistema permita realizar consultas en tiempo real'),('Luis Fernández','luis@example.com','Agregar una sección para preguntas frecuentes'),('María López','maria@example.com','Sería útil poder filtrar los documentos por tipo'),('Pedro Sánchez','pedro@example.com','Incluir un chat de soporte en línea'),('Laura Martínez','laura@example.com','Añadir más opciones de pago'),('José Rodríguez','jose@example.com','Proveer más detalles sobre los procesos de solicitud'),('Marta Díaz','marta@example.com','Que el sistema permita realizar seguimientos de solicitudes'),('Carlos González','carlosg@example.com','Proponer descuentos para los clientes frecuentes'),('Patricia López','patricia@example.com','Implementar un sistema de notificaciones por correo'),('Andrés Sánchez','andres@example.com','Me gustaría que se mejorara la interfaz de usuario'),('Carmen Pérez','carmen@example.com','Añadir más métodos de pago'),('Felipe Hernández','felipe@example.com','Implementar pagos automáticos'),('Javier Martín','javier@example.com','Agregar un historial de solicitudes anteriores'),('Elena Rodríguez','elena@example.com','Incluir una opción para modificar datos personales'),('Francisco López','francisco@example.com','Agregar opción para que los documentos se puedan firmar electrónicamente'),('Ricardo González','ricardo@example.com','Crear una sección de preguntas frecuentes'),('Esteban Díaz','esteban@example.com','Añadir la posibilidad de realizar pagos a través de PayPal'),('Patricia Martínez','patricia.m@example.com','Proponer promociones especiales para clientes nuevos'),('Oscar García','oscar@example.com','Me gustaría poder cambiar el idioma de la interfaz'),('Sofía Sánchez','sofia@example.com','Sería ideal agregar un foro de discusión en línea'),('Antonio Pérez','antonio@example.com','Agregar más detalles sobre la política de privacidad'),('Victoria Gómez','victoria@example.com','Implementar una función de chat con un agente de soporte'),('Luis Romero','luis.romero@example.com','Crear una opción de auto-registro para facilitar el proceso'),('José Mendoza','jose.mendoza@example.com','Me gustaría recibir notificaciones para los pagos pendientes'),('Lorena Martínez','lorena@example.com','Añadir una opción para descargar los documentos enviados'),('Felipe López','felipe.l@example.com','Agregar una opción para añadir más contactos al sistema'),('Raquel Rodríguez','raquel@example.com','Me gustaría que se mejorara el proceso de validación de documentos'),('Juan Sánchez','juan@example.com','Sugerir más promociones para el registro de nuevos usuarios'),('Beatriz Pérez','beatriz@example.com','Me gustaría que se habilite un modo oscuro en el sistema');
/*!40000 ALTER TABLE `sugerencias` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-20 16:25:32
