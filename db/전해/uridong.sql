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
-- Table structure for table `ad`
--

DROP TABLE IF EXISTS `ad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ad` (
  `ad_num` int(11) NOT NULL AUTO_INCREMENT,
  `ad_place` varchar(500) DEFAULT NULL,
  `ad_price` int(11) DEFAULT NULL,
  `ad_extend_price` int(11) DEFAULT NULL,
  `notice_service_price` int(11) DEFAULT NULL,
  PRIMARY KEY (`ad_num`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ad`
--

LOCK TABLES `ad` WRITE;
/*!40000 ALTER TABLE `ad` DISABLE KEYS */;
/*!40000 ALTER TABLE `ad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ad_history_statistics`
--

DROP TABLE IF EXISTS `ad_history_statistics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ad_history_statistics` (
  `ad_statistics_num` int(11) NOT NULL AUTO_INCREMENT,
  `rst_num` int(11) DEFAULT NULL,
  `statistics_num` int(11) DEFAULT NULL,
  `regist_date` datetime DEFAULT NULL,
  `finish_date` datetime DEFAULT NULL,
  `check_each` int(11) DEFAULT NULL,
  PRIMARY KEY (`ad_statistics_num`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ad_history_statistics`
--

LOCK TABLES `ad_history_statistics` WRITE;
/*!40000 ALTER TABLE `ad_history_statistics` DISABLE KEYS */;
/*!40000 ALTER TABLE `ad_history_statistics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ad_statistics`
--

DROP TABLE IF EXISTS `ad_statistics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ad_statistics` (
  `ad_statistics_num` int(11) NOT NULL AUTO_INCREMENT,
  `ad_num` int(11) NOT NULL,
  `rst_num` int(11) NOT NULL,
  `ad_name` varchar(500) DEFAULT NULL,
  `ad_content` varchar(500) DEFAULT NULL,
  `pic_file_path` varchar(500) DEFAULT NULL,
  `ad_start_date` datetime DEFAULT NULL,
  `ad_term` datetime DEFAULT NULL,
  `ad_extend_count` int(11) DEFAULT NULL,
  `notice_service_count` int(11) DEFAULT NULL,
  `total_price` int(11) DEFAULT NULL,
  PRIMARY KEY (`ad_statistics_num`),
  KEY `FK_ad_TO_ad_statistics_1` (`ad_num`),
  KEY `FK_restaurant_TO_ad_statistics_1` (`rst_num`),
  CONSTRAINT `FK_ad_TO_ad_statistics_1` FOREIGN KEY (`ad_num`) REFERENCES `ad` (`ad_num`),
  CONSTRAINT `FK_restaurant_TO_ad_statistics_1` FOREIGN KEY (`rst_num`) REFERENCES `restaurant` (`rst_num`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ad_statistics`
--

LOCK TABLES `ad_statistics` WRITE;
/*!40000 ALTER TABLE `ad_statistics` DISABLE KEYS */;
/*!40000 ALTER TABLE `ad_statistics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coupon_use_statistics`
--

DROP TABLE IF EXISTS `coupon_use_statistics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coupon_use_statistics` (
  `coupon_statistics_num` int(11) NOT NULL AUTO_INCREMENT,
  `member_num` int(11) DEFAULT NULL,
  `rst_num` int(11) DEFAULT NULL,
  `coupon_num` int(11) DEFAULT NULL,
  `use_attime` datetime DEFAULT NULL,
  `per_price` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`coupon_statistics_num`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coupon_use_statistics`
--

LOCK TABLES `coupon_use_statistics` WRITE;
/*!40000 ALTER TABLE `coupon_use_statistics` DISABLE KEYS */;
/*!40000 ALTER TABLE `coupon_use_statistics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `everyday_table_statistics`
--

DROP TABLE IF EXISTS `everyday_table_statistics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `everyday_table_statistics` (
  `everyday_statistics_num` int(11) NOT NULL AUTO_INCREMENT,
  `rst_num` int(11) DEFAULT NULL,
  `timezone` varchar(500) DEFAULT NULL,
  `average_table_use_percentage` float DEFAULT NULL,
  `average_table_roll_ratio` int(11) DEFAULT NULL,
  PRIMARY KEY (`everyday_statistics_num`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `everyday_table_statistics`
--

LOCK TABLES `everyday_table_statistics` WRITE;
/*!40000 ALTER TABLE `everyday_table_statistics` DISABLE KEYS */;
/*!40000 ALTER TABLE `everyday_table_statistics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorite`
--

DROP TABLE IF EXISTS `favorite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorite` (
  `member_num` int(11) NOT NULL AUTO_INCREMENT,
  `rst_num` int(11) NOT NULL,
  `favorite_start_date` datetime NOT NULL,
  `rsv_do_count` int(11) NOT NULL DEFAULT '0',
  `patron_start_date` datetime DEFAULT NULL,
  `coupon_use_count` int(11) DEFAULT NULL,
  `patron_yn` tinyint(1) NOT NULL DEFAULT '0',
  `last_review_date` date DEFAULT NULL,
  PRIMARY KEY (`member_num`,`rst_num`),
  CONSTRAINT `FK_member_TO_favorite_1` FOREIGN KEY (`member_num`) REFERENCES `member` (`member_num`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorite`
--

LOCK TABLES `favorite` WRITE;
/*!40000 ALTER TABLE `favorite` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorite_estimate_history`
--

DROP TABLE IF EXISTS `favorite_estimate_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorite_estimate_history` (
  `estimate_num` int(11) NOT NULL AUTO_INCREMENT,
  `member_num` int(11) NOT NULL,
  `rst_num` int(11) NOT NULL,
  `star` float NOT NULL,
  `review` varchar(500) DEFAULT NULL,
  `write_date` datetime NOT NULL,
  PRIMARY KEY (`estimate_num`),
  KEY `FK_member_TO_favorite_estimate_history_1` (`member_num`),
  KEY `FK_restaurant_TO_favorite_estimate_history_1` (`rst_num`),
  CONSTRAINT `FK_member_TO_favorite_estimate_history_1` FOREIGN KEY (`member_num`) REFERENCES `member` (`member_num`),
  CONSTRAINT `FK_restaurant_TO_favorite_estimate_history_1` FOREIGN KEY (`rst_num`) REFERENCES `restaurant` (`rst_num`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorite_estimate_history`
--

LOCK TABLES `favorite_estimate_history` WRITE;
/*!40000 ALTER TABLE `favorite_estimate_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorite_estimate_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `member_num` int(11) NOT NULL AUTO_INCREMENT,
  `member_grade` varchar(500) NOT NULL,
  `member_call_num` varchar(500) NOT NULL,
  `member_name` varchar(500) NOT NULL,
  `memeber_email` varchar(500) NOT NULL,
  `member_id` varchar(500) NOT NULL,
  `memeber_pw` varchar(500) NOT NULL,
  `like_area` varchar(500) DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  PRIMARY KEY (`member_num`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (11,'vip','01000000000','jang','132@1.1','jang','0000','jurea2dong','2021-12-05 00:00:00'),(12,'vip','01000000000','hwang','132@1.1','hwang','0000','jurea2dong','2021-11-05 00:00:00'),(13,'normal','01000000000','choi','123@1.1','choi1','0000','yangjungdong','2021-10-05 00:00:00'),(14,'normal','01000000000','park','1@1.1','park','0000','yangjungdong','2021-01-05 00:00:00'),(15,'normal','01000000000','park1','2@1.1','park1','0000','yangjungdong','2021-12-01 00:00:00'),(16,'normal','01000000000','park2','3@1.1','park2','0000','sajikdong','2021-10-04 00:00:00'),(17,'normal','01000000000','choi1','4@1.1','choi1','0000','sajikdong','2021-12-05 00:00:00'),(18,'normal','01000000000','choi2','5@1.1','choi2','0000','sajikdong','2021-10-05 00:00:00'),(19,'normal','01000000000','choi3','6@1.1','choi3','0000','yeonjaedong','2021-12-05 00:00:00'),(20,'normal','01000000000','jang1','7@1.1','jang1','0000','yeonjaedong','2021-12-05 00:00:00');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member_coupon`
--

DROP TABLE IF EXISTS `member_coupon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member_coupon` (
  `member_num` int(11) NOT NULL,
  `coupon_num` int(11) NOT NULL,
  `print_attime` datetime NOT NULL,
  `end_attime` datetime NOT NULL,
  `use_yn` tinyint(1) NOT NULL,
  PRIMARY KEY (`member_num`,`coupon_num`),
  KEY `FK_restaurant_coupon_TO_member_coupon_1` (`coupon_num`),
  CONSTRAINT `FK_member_TO_member_coupon_1` FOREIGN KEY (`member_num`) REFERENCES `member` (`member_num`),
  CONSTRAINT `FK_restaurant_coupon_TO_member_coupon_1` FOREIGN KEY (`coupon_num`) REFERENCES `restaurant_coupon` (`coupon_num`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member_coupon`
--

LOCK TABLES `member_coupon` WRITE;
/*!40000 ALTER TABLE `member_coupon` DISABLE KEYS */;
/*!40000 ALTER TABLE `member_coupon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member_play_history`
--

DROP TABLE IF EXISTS `member_play_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member_play_history` (
  `serial_num` varchar(255) NOT NULL ,
  `play_num` varchar(255) NOT NULL,
  `member_num` int(11) NOT NULL,
  `play_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  PRIMARY KEY (`serial_num`),
  KEY `FK_play_TO_member_play_history_1` (`play_num`),
  KEY `FK_member_TO_member_play_history_1` (`member_num`),
  CONSTRAINT `FK_member_TO_member_play_history_1` FOREIGN KEY (`member_num`) REFERENCES `member` (`member_num`),
  CONSTRAINT `FK_play_TO_member_play_history_1` FOREIGN KEY (`play_num`) REFERENCES `play` (`play_num`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member_play_history`
--

LOCK TABLES `member_play_history` WRITE;
/*!40000 ALTER TABLE `member_play_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `member_play_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `month_table_statistics`
--

DROP TABLE IF EXISTS `month_table_statistics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `month_table_statistics` (
  `month_statistics_num` int(11) NOT NULL AUTO_INCREMENT,
  `rst_num` int(11) DEFAULT NULL,
  `timezone` varchar(500) DEFAULT NULL,
  `month_average_table_use_percentage` float DEFAULT NULL,
  `month_average_table_roll_ratio` int(11) DEFAULT NULL,
  PRIMARY KEY (`month_statistics_num`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `month_table_statistics`
--

LOCK TABLES `month_table_statistics` WRITE;
/*!40000 ALTER TABLE `month_table_statistics` DISABLE KEYS */;
/*!40000 ALTER TABLE `month_table_statistics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `play`
--

DROP TABLE IF EXISTS `play`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `play` (
  `play_num` varchar(255) NOT NULL,
  `score` int(11) NOT NULL,
  `score_expiration` datetime NOT NULL,
  `target_devision` varchar(255) DEFAULT NULL,
  `play_text` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`play_num`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `play`
--

LOCK TABLES `play` WRITE;
/*!40000 ALTER TABLE `play` DISABLE KEYS */;
/*!40000 ALTER TABLE `play` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant` (
  `rst_num` int(11) NOT NULL AUTO_INCREMENT,
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

--
-- Table structure for table `restaurant_category`
--

DROP TABLE IF EXISTS `restaurant_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant_category` (
  `category_num` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`category_num`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant_category`
--

LOCK TABLES `restaurant_category` WRITE;
/*!40000 ALTER TABLE `restaurant_category` DISABLE KEYS */;
INSERT INTO `restaurant_category` VALUES (1,'Korea'),(2,'Japan'),(3,'China'),(4,'U.S.A');
/*!40000 ALTER TABLE `restaurant_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant_coupon`
--

DROP TABLE IF EXISTS `restaurant_coupon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant_coupon` (
  `coupon_num` int(11) NOT NULL AUTO_INCREMENT,
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

--
-- Table structure for table `restaurant_menu`
--

DROP TABLE IF EXISTS `restaurant_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant_menu` (
  `menu_num` int(11) NOT NULL AUTO_INCREMENT,
  `rst_num` int(11) NOT NULL,
  `menu_name` varchar(500) NOT NULL,
  `menu_price` int(11) NOT NULL,
  `menu_kind` varchar(500) NOT NULL,
  PRIMARY KEY (`menu_num`,`rst_num`),
  KEY `FK_restaurant_TO_restaurant_menu_1` (`rst_num`),
  CONSTRAINT `FK_restaurant_TO_restaurant_menu_1` FOREIGN KEY (`rst_num`) REFERENCES `restaurant` (`rst_num`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant_menu`
--

LOCK TABLES `restaurant_menu` WRITE;
/*!40000 ALTER TABLE `restaurant_menu` DISABLE KEYS */;
/*!40000 ALTER TABLE `restaurant_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant_play_history`
--

DROP TABLE IF EXISTS `restaurant_play_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant_play_history` (
  `serial_num` varchar(255) NOT NULL,
  `play_num` varchar(255) NOT NULL,
  `rst_num` int(11) NOT NULL,
  `play_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  PRIMARY KEY (`serial_num`),
  KEY `FK_play_TO_restaurant_play_history_1` (`play_num`),
  KEY `FK_restaurant_TO_restaurant_play_history_1` (`rst_num`),
  CONSTRAINT `FK_play_TO_restaurant_play_history_1` FOREIGN KEY (`play_num`) REFERENCES `play` (`play_num`),
  CONSTRAINT `FK_restaurant_TO_restaurant_play_history_1` FOREIGN KEY (`rst_num`) REFERENCES `restaurant` (`rst_num`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant_play_history`
--

LOCK TABLES `restaurant_play_history` WRITE;
/*!40000 ALTER TABLE `restaurant_play_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `restaurant_play_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant_reservation`
--

DROP TABLE IF EXISTS `restaurant_reservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant_reservation` (
  `rsv_num` int(11) NOT NULL AUTO_INCREMENT,
  `member_num` int(11) NOT NULL,
  `rst_num` int(11) NOT NULL,
  `rsv_man` int(11) DEFAULT NULL,
  `rsv_status` varchar(500) DEFAULT NULL,
  `rsv_attime` datetime DEFAULT NULL,
  `arrive_predict_time` datetime DEFAULT NULL,
  PRIMARY KEY (`rsv_num`),
  KEY `FK_member_TO_restaurant_reservation_1` (`member_num`),
  KEY `FK_restaurant_TO_restaurant_reservation_1` (`rst_num`),
  CONSTRAINT `FK_member_TO_restaurant_reservation_1` FOREIGN KEY (`member_num`) REFERENCES `member` (`member_num`),
  CONSTRAINT `FK_restaurant_TO_restaurant_reservation_1` FOREIGN KEY (`rst_num`) REFERENCES `restaurant` (`rst_num`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant_reservation`
--

LOCK TABLES `restaurant_reservation` WRITE;
/*!40000 ALTER TABLE `restaurant_reservation` DISABLE KEYS */;
/*!40000 ALTER TABLE `restaurant_reservation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rsv_history_statistics`
--

DROP TABLE IF EXISTS `rsv_history_statistics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rsv_history_statistics` (
  `rsv_statistics_num` int(11) NOT NULL AUTO_INCREMENT,
  `rst_num` int(11) DEFAULT NULL,
  `member_num` int(11) DEFAULT NULL,
  `rsv_num` int(11) DEFAULT NULL,
  `rsv_do_yn` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`rsv_statistics_num`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rsv_history_statistics`
--

LOCK TABLES `rsv_history_statistics` WRITE;
/*!40000 ALTER TABLE `rsv_history_statistics` DISABLE KEYS */;
/*!40000 ALTER TABLE `rsv_history_statistics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sale_timezone`
--

DROP TABLE IF EXISTS `sale_timezone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sale_timezone` (
  `rst_num` int(11) NOT NULL AUTO_INCREMENT,
  `day` char(1) DEFAULT NULL,
  `start_attime` datetime DEFAULT NULL,
  `finish_attime` datetime DEFAULT NULL,
  `sale_yn` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`rst_num`),
  CONSTRAINT `FK_restaurant_TO_sale_timezone_1` FOREIGN KEY (`rst_num`) REFERENCES `restaurant` (`rst_num`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sale_timezone`
--

LOCK TABLES `sale_timezone` WRITE;
/*!40000 ALTER TABLE `sale_timezone` DISABLE KEYS */;
/*!40000 ALTER TABLE `sale_timezone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `table`
--

DROP TABLE IF EXISTS `table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `table` (
  `table_num` int(11) NOT NULL AUTO_INCREMENT,
  `rst_num` int(11) NOT NULL,
  `use_yn` tinyint(1) DEFAULT NULL,
  `rsv_yn` tinyint(1) DEFAULT NULL,
  `seat` int(11) DEFAULT NULL,
  PRIMARY KEY (`table_num`,`rst_num`),
  KEY `FK_restaurant_TO_table_1` (`rst_num`),
  CONSTRAINT `FK_restaurant_TO_table_1` FOREIGN KEY (`rst_num`) REFERENCES `restaurant` (`rst_num`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `table`
--

LOCK TABLES `table` WRITE;
/*!40000 ALTER TABLE `table` DISABLE KEYS */;
/*!40000 ALTER TABLE `table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `table_history`
--

DROP TABLE IF EXISTS `table_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `table_history` (
  `table_history_num` int(11) NOT NULL AUTO_INCREMENT,
  `table_num` int(11) NOT NULL,
  `rst_num` int(11) NOT NULL,
  `enter_attime` char(1) DEFAULT NULL,
  `out_attime` datetime DEFAULT NULL,
  PRIMARY KEY (`table_history_num`,`table_num`,`rst_num`),
  KEY `FK_table_TO_table_history_1` (`table_num`),
  KEY `FK_table_TO_table_history_2` (`rst_num`),
  CONSTRAINT `FK_table_TO_table_history_1` FOREIGN KEY (`table_num`) REFERENCES `table` (`table_num`),
  CONSTRAINT `FK_table_TO_table_history_2` FOREIGN KEY (`rst_num`) REFERENCES `restaurant` (`rst_num`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `table_history`
--

LOCK TABLES `table_history` WRITE;
/*!40000 ALTER TABLE `table_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `table_history` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-05 22:21:04
