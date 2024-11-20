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
-- Table structure for table `costs_data`
--

DROP TABLE IF EXISTS `costs_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `costs_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `costs` int(11) DEFAULT NULL,
  `period` varchar(2) DEFAULT NULL,
  `year` int(4) DEFAULT NULL,
  `month` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `costs_data`
--

/*!40000 ALTER TABLE `costs_data` DISABLE KEYS */;
INSERT INTO `costs_data` VALUES (1,4000,'Q1',2016,'January'),(2,4500,'Q1',2016,'February'),(3,5000,'Q1',2016,'March'),(4,5300,'Q2',2016,'April'),(5,4900,'Q2',2016,'May'),(6,4700,'Q2',2016,'June'),(7,4900,'Q3',2016,'July'),(8,5200,'Q3',2016,'August'),(9,5400,'Q3',2016,'September'),(10,5700,'Q4',2016,'October'),(11,6000,'Q4',2016,'November'),(12,6200,'Q4',2016,'December'),(13,3800,'Q1',2017,'January'),(14,4200,'Q1',2017,'February'),(15,4600,'Q1',2017,'March'),(16,4900,'Q2',2017,'April'),(17,4800,'Q2',2017,'May'),(18,4500,'Q2',2017,'June'),(19,4700,'Q3',2017,'July'),(20,5100,'Q3',2017,'August'),(21,5300,'Q3',2017,'September'),(22,5600,'Q4',2017,'October'),(23,5800,'Q4',2017,'November'),(24,6100,'Q4',2017,'December'),(25,3500,'Q1',2018,'January'),(26,3900,'Q1',2018,'February'),(27,4300,'Q1',2018,'March'),(28,4600,'Q2',2018,'April'),(29,4500,'Q2',2018,'May'),(30,4200,'Q2',2018,'June'),(31,4400,'Q3',2018,'July'),(32,4700,'Q3',2018,'August'),(33,5000,'Q3',2018,'September'),(34,5300,'Q4',2018,'October'),(35,5500,'Q4',2018,'November'),(36,5800,'Q4',2018,'December'),(37,3200,'Q1',2019,'January'),(38,3600,'Q1',2019,'February'),(39,4000,'Q1',2019,'March'),(40,4300,'Q2',2019,'April'),(41,4100,'Q2',2019,'May'),(42,3900,'Q2',2019,'June'),(43,4200,'Q3',2019,'July'),(44,4500,'Q3',2019,'August'),(45,4700,'Q3',2019,'September'),(46,5000,'Q4',2019,'October'),(47,5200,'Q4',2019,'November'),(48,5500,'Q4',2019,'December'),(49,3000,'Q1',2020,'January'),(50,3400,'Q1',2020,'February'),(51,3800,'Q1',2020,'March'),(52,4100,'Q2',2020,'April'),(53,3900,'Q2',2020,'May'),(54,3700,'Q2',2020,'June'),(55,4000,'Q3',2020,'July'),(56,4300,'Q3',2020,'August'),(57,4500,'Q3',2020,'September'),(58,4800,'Q4',2020,'October'),(59,5100,'Q4',2020,'November'),(60,5300,'Q4',2020,'December'),(61,2800,'Q1',2021,'January'),(62,3200,'Q1',2021,'February'),(63,3600,'Q1',2021,'March'),(64,3900,'Q2',2021,'April'),(65,3700,'Q2',2021,'May'),(66,3500,'Q2',2021,'June'),(67,3800,'Q3',2021,'July'),(68,4100,'Q3',2021,'August'),(69,4300,'Q3',2021,'September'),(70,4600,'Q4',2021,'October'),(71,4900,'Q4',2021,'November'),(72,5100,'Q4',2021,'December'),(73,4000,'Q1',2022,'January'),(74,4500,'Q1',2022,'February'),(75,5000,'Q1',2022,'March'),(76,5300,'Q2',2022,'April'),(77,4900,'Q2',2022,'May'),(78,4700,'Q2',2022,'June'),(79,4900,'Q3',2022,'July'),(80,5200,'Q3',2022,'August'),(81,5400,'Q3',2022,'September'),(82,5700,'Q4',2022,'October'),(83,6000,'Q4',2022,'November'),(84,6200,'Q4',2022,'December'),(85,3800,'Q1',2023,'January'),(86,4200,'Q1',2023,'February'),(87,4600,'Q1',2023,'March'),(88,4900,'Q2',2023,'April'),(89,4800,'Q2',2023,'May'),(90,4500,'Q2',2023,'June'),(91,4700,'Q3',2023,'July'),(92,5100,'Q3',2023,'August'),(93,5300,'Q3',2023,'September'),(94,5600,'Q4',2023,'October'),(95,5800,'Q4',2023,'November'),(96,6100,'Q4',2023,'December'),(97,3500,'Q1',2024,'January'),(98,3900,'Q1',2024,'February'),(99,4300,'Q1',2024,'March'),(100,4600,'Q2',2024,'April');
/*!40000 ALTER TABLE `costs_data` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-20 16:25:21
