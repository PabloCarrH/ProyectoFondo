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
-- Table structure for table `affiliates_data`
--

DROP TABLE IF EXISTS `affiliates_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `affiliates_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `period` varchar(20) DEFAULT 'Q4 2024',
  `count` int(11) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `membership_fee` decimal(10,2) DEFAULT NULL,
  `monthly_fee` decimal(10,2) DEFAULT NULL,
  `status` enum('Al día','En mora') DEFAULT NULL,
  `role` varchar(50) NOT NULL DEFAULT 'user',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `affiliates_data`
--

/*!40000 ALTER TABLE `affiliates_data` DISABLE KEYS */;
INSERT INTO `affiliates_data` VALUES (1,'Q1 2023',200,'Juan Camilo Perez sosa','juan.perez@example.com','password123',300.00,50.00,'Al día','user'),(3,'Q3 2023',120,'Carlos Martínez','carlos.martinez@example.com','password789',250.00,70.00,'Al día','user'),(4,'Q4 2023',400,'Laura Rodríguez','laura.rodriguez@example.com','password321',150.00,10.00,'En mora','user'),(5,'Q1 2022',50,'Andrés García','andres.garcia@example.com','password654',320.00,60.00,'Al día','user'),(6,'Q2 2022',330,'Sofía Ramírez','sofia.ramirez@example.com','password987',120.00,25.00,'Al día','user'),(7,'Q3 2022',100,'Ricardo Fernández','ricardo.fernandez@example.com','password741',290.00,30.00,'En mora','user'),(8,'Q4 2022',310,'Paula Torres','paula.torres@example.com','password852',140.00,80.00,'Al día','user'),(9,'Q1 2021',90,'Javier Sánchez','javier.sanchez@example.com','password963',260.00,65.00,'Al día','user'),(10,'Q2 2021',45,'Ana Morales','ana.morales@example.com','password159',300.00,35.00,'En mora','user'),(11,'Q3 2021',170,'Miguel Gutiérrez','miguel.gutierrez@example.com','password753',220.00,45.00,'Al día','user'),(12,'Q4 2021',310,'Claudia Herrera','claudia.herrera@example.com','password951',210.00,25.00,'En mora','user'),(13,'Q1 2020',55,'Daniela López','daniela.lopez@example.com','password147',280.00,55.00,'Al día','user'),(14,'Q2 2020',240,'Esteban Ruiz','esteban.ruiz@example.com','password258',150.00,40.00,'En mora','user'),(15,'Q3 2020',90,'Carolina Gómez','carolina.gomez@example.com','password369',310.00,50.00,'Al día','user'),(16,'Q4 2020',130,'Sebastián Medina','sebastian.medina@example.com','password456',190.00,45.00,'En mora','user'),(17,'Q1 2019',65,'Felipe Castro','felipe.castro@example.com','password123',280.00,30.00,'Al día','user'),(19,'Q3 2019',320,'Roberto Jiménez','roberto.jimenez@example.com','password987',180.00,75.00,'Al día','user'),(20,'Q4 2019',100,'Carmen Pardo','carmen.pardo@example.com','password741',290.00,25.00,'En mora','user'),(21,'Q1 2018',200,'Tomás Álvarez','tomas.alvarez@example.com','password852',150.00,50.00,'Al día','user'),(22,'Q2 2018',40,'Gloria Silva','gloria.silva@example.com','password963',300.00,20.00,'En mora','user'),(23,'Q3 2018',290,'Luis Ortega','luis.ortega@example.com','password159',130.00,85.00,'Al día','user'),(24,'Q4 2018',120,'Verónica Díaz','veronica.diaz@example.com','password753',310.00,55.00,'En mora','user'),(25,'Q1 2017',110,'Gustavo Peña','gustavo.pena@example.com','password951',240.00,40.00,'Al día','user'),(26,'Q2 2017',370,'Elena Cárdenas','elena.cardenas@example.com','password147',170.00,35.00,'En mora','user'),(27,'Q3 2017',65,'Jorge Moreno','jorge.moreno@example.com','password258',320.00,25.00,'Al día','user'),(28,'Q4 2017',150,'Patricia Vega','patricia.vega@example.com','password369',230.00,70.00,'En mora','user'),(29,'Q1 2016',55,'Rodrigo Beltrán','rodrigo.beltran@example.com','password456',290.00,30.00,'Al día','user'),(30,'Q2 2016',200,'Camila Navarro','camila.navarro@example.com','password123',180.00,40.00,'Al día','user'),(31,'Q3 2016',315,'Diego Flores','diego.flores@example.com','password654',190.00,35.00,'En mora','user'),(32,'Q4 2016',130,'Isabel Castillo','isabel.castillo@example.com','password987',270.00,60.00,'Al día','user'),(33,'Q1 2015',80,'Fabián Reyes','fabian.reyes@example.com','password741',140.00,65.00,'En mora','user'),(34,'Q2 2015',300,'Gabriela Ríos','gabriela.rios@example.com','password852',150.00,75.00,'Al día','user'),(35,'Q3 2015',60,'Pablo Muñoz','pablo.munoz@example.com','password963',250.00,25.00,'En mora','user'),(36,'Q4 2015',280,'Sara Guzmán','sara.guzman@example.com','password159',180.00,45.00,'Al día','user'),(37,'Q1 2014',70,'Ignacio Ramos','ignacio.ramos@example.com','password753',260.00,55.00,'Al día','user'),(38,'Q2 2014',150,'Adriana López','adriana.lopez@example.com','password951',290.00,30.00,'En mora','user'),(39,'Q3 2014',320,'Raúl Serrano','raul.serrano@example.com','password147',120.00,45.00,'Al día','user'),(40,'Q4 2014',130,'Jessica Fuentes','jessica.fuentes@example.com','password258',300.00,70.00,'En mora','user'),(41,'Q1 2013',290,'Álvaro Quintero','alvaro.quintero@example.com','password369',110.00,35.00,'Al día','user'),(42,'Q2 2013',50,'Rosa Rivera','rosa.rivera@example.com','password456',250.00,60.00,'En mora','user'),(43,'Q3 2013',180,'Oscar Mendoza','oscar.mendoza@example.com','password123',140.00,75.00,'Al día','user'),(44,'Q4 2013',65,'Cristina Pacheco','cristina.pacheco@example.com','password654',300.00,25.00,'En mora','user'),(45,'Q1 2022',250,'Carlos Lozano','carlos.lozano@example.com','password333',180.00,45.00,'En mora','user'),(46,'Q3 2021',300,'Julia Ortiz','julia.ortiz@example.com','password444',270.00,40.00,'Al día','user'),(47,'Q4 2020',220,'René Ramírez','rene.ramirez@example.com','password555',120.00,60.00,'Al día','user'),(48,'Q2 2023',150,'Elena Cruz','elena.cruz@example.com','password666',140.00,25.00,'Al día','user'),(49,'Q4 2021',100,'Mario Palacios','mario.palacios@example.com','password777',160.00,20.00,'En mora','user'),(50,'Q1 2019',140,'Sergio Molina','sergio.molina@example.com','password888',190.00,35.00,'Al día','user'),(51,'Q3 2020',75,'Natalia Luna','natalia.luna@example.com','password999',310.00,50.00,'En mora','user'),(52,'Q2 2022',340,'Andrea Campos','andrea.campos@example.com','password111',170.00,30.00,'Al día','user'),(53,'Q1 2020',110,'Diana Valdez','diana.valdez@example.com','password222',210.00,60.00,'En mora','user'),(55,'Q3 2019',130,'Lucía Figueroa','lucia.figueroa@example.com','password333',230.00,40.00,'Al día','user'),(56,'Q4 2022',300,'Esteban Acosta','esteban.acosta@example.com','password444',190.00,30.00,'En mora','user'),(57,'Q1 2021',160,'Teresa Blanco','teresa.blanco@example.com','password555',120.00,55.00,'Al día','user'),(58,'Q2 2021',210,'Pablo Cruz','pablo.cruz@example.com','password666',260.00,45.00,'En mora','user'),(59,'Q4 2018',60,'Rafael Herrera','rafael.herrera@example.com','password777',310.00,20.00,'Al día','user'),(60,'Q1 2017',90,'Mónica Núñez','monica.nunez@example.com','password888',220.00,35.00,'En mora','user'),(61,'Q3 2017',75,'Santiago Paz','santiago.paz@example.com','password999',180.00,25.00,'Al día','user'),(62,'Q2 2016',85,'Rebeca Cáceres','rebeca.caceres@example.com','password111',270.00,50.00,'En mora','user'),(63,'Q4 2015',190,'Luis Suárez','luis.suarez@example.com','password222',160.00,40.00,'Al día','user'),(64,'Q1 2016',140,'Ana Contreras','ana.contreras@example.com','password333',250.00,60.00,'En mora','user'),(65,'Q2 2015',320,'José Beltrán','jose.beltran@example.com','password444',140.00,55.00,'Al día','user'),(66,'Q3 2014',105,'Clara Jiménez','clara.jimenez@example.com','password555',230.00,35.00,'En mora','user'),(67,'Q4 2013',200,'Ricardo Arias','ricardo.arias@example.com','password666',120.00,75.00,'Al día','user'),(68,'Q1 2015',175,'Lorena Ortega','lorena.ortega@example.com','password777',290.00,30.00,'En mora','user'),(69,'Q2 2014',110,'Valeria Quiroz','valeria.quiroz@example.com','password888',170.00,45.00,'Al día','user'),(70,'Q3 2013',90,'Mario Bustos','mario.bustos@example.com','password999',240.00,20.00,'En mora','user'),(71,'Q4 2012',135,'Estela Ponce','estela.ponce@example.com','password111',210.00,65.00,'Al día','user'),(72,'Q1 2012',155,'Fabián Camacho','fabian.camacho@example.com','password222',130.00,30.00,'En mora','user'),(73,'Q3 2011',185,'Gloria Valle','gloria.valle@example.com','password333',180.00,50.00,'Al día','user'),(74,'Q4 2011',90,'Javier Ortiz','javier.ortiz@example.com','password444',150.00,40.00,'En mora','user'),(75,'Q4 2024',250,'Samuel Santos','samuelsantos@example.com','12345',250.00,20.00,'En mora','user'),(76,'Q4 2024',220,'Samuel Santos','samuelsantosb102504@gmail.com','123456',1500.00,260.00,'En mora','admin');
/*!40000 ALTER TABLE `affiliates_data` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-20 16:25:12
