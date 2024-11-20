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
-- Table structure for table `sales_data`
--

DROP TABLE IF EXISTS `sales_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sales_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `month_name` varchar(20) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `sales` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales_data`
--

/*!40000 ALTER TABLE `sales_data` DISABLE KEYS */;
INSERT INTO `sales_data` VALUES (1,'January',2023,5000),(2,'February',2023,6200),(3,'March',2023,7000),(4,'April',2023,7300),(5,'May',2023,6000),(6,'June',2023,6900),(7,'July',2023,7200),(8,'August',2023,7800),(9,'September',2023,8000),(10,'October',2023,8500),(11,'November',2023,9000),(12,'December',2023,9500),(13,'January',2022,4600),(14,'February',2022,5200),(15,'March',2022,5800),(16,'April',2022,6200),(17,'May',2022,5900),(18,'June',2022,6400),(19,'July',2022,6700),(20,'August',2022,7200),(21,'September',2022,7500),(22,'October',2022,8100),(23,'November',2022,8600),(24,'December',2022,9000),(25,'January',2021,4200),(26,'February',2021,4800),(27,'March',2021,5500),(28,'April',2021,6000),(29,'May',2021,5700),(30,'June',2021,6100),(31,'July',2021,6400),(32,'August',2021,6900),(33,'September',2021,7300),(34,'October',2021,7800),(35,'November',2021,8200),(36,'December',2021,8600),(37,'January',2020,3900),(38,'February',2020,4200),(39,'March',2020,4900),(40,'April',2020,5300),(41,'May',2020,5000),(42,'June',2020,5400),(43,'July',2020,5900),(44,'August',2020,6400),(45,'September',2020,6700),(46,'October',2020,7100),(47,'November',2020,7600),(48,'December',2020,8000),(49,'January',2019,3700),(50,'February',2019,4100),(51,'March',2019,4600),(52,'April',2019,4900),(53,'May',2019,4500),(54,'June',2019,4800),(55,'July',2019,5100),(56,'August',2019,5500),(57,'September',2019,5800),(58,'October',2019,6300),(59,'November',2019,6700),(60,'December',2019,7000);
/*!40000 ALTER TABLE `sales_data` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-20 16:25:29
