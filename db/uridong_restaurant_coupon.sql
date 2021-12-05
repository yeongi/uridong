-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: yeongi.site    Database: uridong
-- ------------------------------------------------------
-- Server version	5.7.36-0ubuntu0.18.04.1

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
-- Table structure for table `restaurant_coupon`
--

DROP TABLE IF EXISTS `restaurant_coupon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant_coupon` (
  `coupon_num` int(11) NOT NULL,
  `menu_num` int(11) NOT NULL,
  `rst_num` int(11) NOT NULL,
  `coupon_name` varchar(500) DEFAULT NULL,
  `sale_ratio` int(11) NOT NULL,
  `coupon_kind` varchar(500) DEFAULT NULL,
  `pic_file_path` varchar(500) DEFAULT NULL,
  `coupon_print_attime` datetime DEFAULT NULL,
  `use_possible_time` int(11) DEFAULT NULL,
  `coupon_end_yn` tinyint(1) DEFAULT NULL,
  `count_man` int(11) NOT NULL,
  `use_possible_man` int(11) NOT NULL,
  PRIMARY KEY (`coupon_num`),
  KEY `FK_restaurant_menu_TO_restaurant_coupon_1` (`menu_num`),
  KEY `FK_restaurant_menu_TO_restaurant_coupon_2` (`rst_num`),
  CONSTRAINT `FK_restaurant_menu_TO_restaurant_coupon_1` FOREIGN KEY (`menu_num`) REFERENCES `restaurant_menu` (`menu_num`),
  CONSTRAINT `FK_restaurant_menu_TO_restaurant_coupon_2` FOREIGN KEY (`rst_num`) REFERENCES `restaurant_menu` (`rst_num`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant_coupon`
--

LOCK TABLES `restaurant_coupon` WRITE;
/*!40000 ALTER TABLE `restaurant_coupon` DISABLE KEYS */;
/*!40000 ALTER TABLE `restaurant_coupon` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-05 22:18:27
