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
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant` (
  `rst_num` int(11) NOT NULL DEFAULT '200',
  `seller_member_num` int(11) NOT NULL,
  `category_num` int(11) DEFAULT NULL,
  `rst_name` varchar(500) NOT NULL,
  `rst_call_num` varchar(500) NOT NULL,
  `rst_address` varchar(500) NOT NULL,
  `rst_grade` varchar(500) NOT NULL DEFAULT '500',
  `rst_regist_date` datetime NOT NULL,
  `license_file_path` varchar(500) NOT NULL,
  `pic_file_path` varchar(500) DEFAULT NULL,
  `patron_rule` int(11) NOT NULL,
  `patron_maintain` varchar(255) DEFAULT NULL,
  `rst_star` float DEFAULT NULL,
  `star_each` int(11) DEFAULT NULL,
  `review_each` int(11) DEFAULT NULL,
  `use_table` int(11) DEFAULT NULL,
  `all_table_each` int(11) DEFAULT NULL,
  `rsv_table` int(11) DEFAULT NULL,
  `rsv_rule_now_table_each` int(11) DEFAULT NULL,
  `max_predict_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`rst_num`),
  KEY `FK_member_TO_restaurant_1` (`seller_member_num`),
  KEY `FK_restaurant_category_TO_restaurant_1` (`category_num`),
  CONSTRAINT `FK_member_TO_restaurant_1` FOREIGN KEY (`seller_member_num`) REFERENCES `member` (`member_num`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_restaurant_category_TO_restaurant_1` FOREIGN KEY (`category_num`) REFERENCES `restaurant_category` (`category_num`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES (1,11,1,'A','0510000000','jurea2dong','normal','2019-12-05 00:00:00','a','a',1,'2',4.3,21,20,NULL,NULL,NULL,NULL,NULL),(2,12,2,'B','0510000000','yangjungdong','normal','2020-11-05 00:00:00','a','a',2,'2',4.1,84,60,NULL,NULL,NULL,NULL,NULL),(3,13,3,'C','0510000000','jurea2dong','normal','2020-12-05 00:00:00','a','a',3,'2',4.2,8489,486,NULL,NULL,NULL,NULL,NULL),(4,14,4,'D','0510000000','yangjungdong','normal','2020-01-05 00:00:00','a','a',1,'2',4.3,4,1,NULL,NULL,NULL,NULL,NULL),(5,15,1,'E','0510000000','jurea2dong','normal','2020-12-05 00:00:00','a','a',2,'2',4.4,6,3,NULL,NULL,NULL,NULL,NULL),(6,16,2,'F','0510000000','jurea2dong','normal','2021-12-05 00:00:00','a','a',3,'2',4.1,6465,654,NULL,NULL,NULL,NULL,NULL),(7,17,3,'G','0510000000','sajikdong','normal','2021-12-05 00:00:00','a','a',1,'2',4.2,465,121,NULL,NULL,NULL,NULL,NULL),(8,18,4,'H','0510000000','sajikdong','normal','2020-12-05 00:00:00','a','a',2,'2',4.3,6,2,NULL,NULL,NULL,NULL,NULL),(9,19,1,'I','0510000000','jurea2dong','vip','2021-12-05 00:00:00','a','a',3,'2',4.4,54,15,NULL,NULL,NULL,NULL,NULL),(10,20,2,'J','0510000000','yeonjaedong','vip','2021-12-01 00:00:00','a','a',1,'2',4.5,2,1,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-05 22:18:00
