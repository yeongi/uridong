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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ad`
--

LOCK TABLES `ad` WRITE;
/*!40000 ALTER TABLE `ad` DISABLE KEYS */;
INSERT INTO `ad` VALUES (1,'SIDE A',100000,100000,NULL),(2,'SIDE B',200000,200000,NULL),(3,'SIDE C',300000,300000,NULL),(4,'TOP A',400000,400000,NULL),(5,'TOP B',500000,500000,NULL),(6,'TOP C',600000,600000,NULL),(7,'TOP D',700000,700000,NULL),(8,'BOTTOM A',800000,800000,NULL),(9,'BOTTOM B',900000,900000,NULL),(10,'BOTTOM C',1000000,1000000,NULL);
/*!40000 ALTER TABLE `ad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ad_detail`
--

DROP TABLE IF EXISTS `ad_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ad_detail` (
  `ad_detail_num` int(11) NOT NULL,
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
  PRIMARY KEY (`ad_detail_num`),
  KEY `FK_ad_TO_ad_statistics_1` (`ad_num`),
  KEY `FK_restaurant_TO_ad_statistics_1` (`rst_num`),
  CONSTRAINT `FK_ad_TO_ad_statistics_1` FOREIGN KEY (`ad_num`) REFERENCES `ad` (`ad_num`),
  CONSTRAINT `FK_restaurant_TO_ad_statistics_1` FOREIGN KEY (`rst_num`) REFERENCES `restaurant` (`rst_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ad_detail`
--

LOCK TABLES `ad_detail` WRITE;
/*!40000 ALTER TABLE `ad_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `ad_detail` ENABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ad_history_statistics`
--

LOCK TABLES `ad_history_statistics` WRITE;
/*!40000 ALTER TABLE `ad_history_statistics` DISABLE KEYS */;
/*!40000 ALTER TABLE `ad_history_statistics` ENABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
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
  CONSTRAINT `FK_member_TO_favorite_1` FOREIGN KEY (`member_num`) REFERENCES `member` (`member_num`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorite`
--

LOCK TABLES `favorite` WRITE;
/*!40000 ALTER TABLE `favorite` DISABLE KEYS */;
INSERT INTO `favorite` VALUES (11,1,'2021-12-05 00:00:00',5,'2021-12-05 00:00:00',10,1,'2021-12-05'),(11,2,'2021-12-05 00:00:00',4,NULL,NULL,0,NULL),(11,3,'2021-12-05 00:00:00',4,NULL,NULL,0,NULL),(11,4,'2021-01-05 00:00:00',405,'2021-04-05 00:00:00',152,1,'2021-12-05'),(12,1,'2021-12-05 00:00:00',1,NULL,NULL,0,NULL),(12,2,'2021-12-05 00:00:00',2,NULL,NULL,0,NULL),(12,3,'2021-12-05 00:00:00',3,NULL,2,0,NULL),(13,1,'2021-12-05 00:00:00',4,NULL,3,0,NULL),(13,2,'2021-12-05 00:00:00',1,NULL,5,0,NULL),(13,3,'2021-12-05 00:00:00',2,NULL,19,0,NULL),(13,4,'2021-12-05 00:00:00',3,NULL,NULL,0,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorite_estimate_history`
--

LOCK TABLES `favorite_estimate_history` WRITE;
/*!40000 ALTER TABLE `favorite_estimate_history` DISABLE KEYS */;
INSERT INTO `favorite_estimate_history` VALUES (1,11,2,5,'\"so good\"','2021-12-05 00:00:00'),(2,12,2,5,'\"so good\"','2021-12-05 00:00:00'),(3,13,2,5,'\"so nice\"','2021-12-05 00:00:00'),(4,14,3,5,'\"so nice\"','2021-12-05 00:00:00'),(5,15,4,5,'\"so good\"','2021-12-05 00:00:00'),(6,16,1,5,'\"so good\"','2021-12-05 00:00:00'),(7,17,1,5,'\"so good\"','2021-12-05 00:00:00'),(8,18,5,5,'\"so nice\"','2021-12-05 00:00:00'),(9,19,6,5,'\"so nice\"','2021-12-05 00:00:00'),(10,20,7,5,'\"so nice\"','2021-12-05 00:00:00');
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
  `member_grade` varchar(500) NOT NULL DEFAULT 'normal',
  `member_call_num` varchar(500) NOT NULL,
  `member_name` varchar(500) NOT NULL,
  `memeber_email` varchar(500) NOT NULL,
  `member_id` varchar(500) NOT NULL,
  `memeber_pw` varchar(500) NOT NULL,
  `like_area` varchar(500) DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  PRIMARY KEY (`member_num`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (11,'vip','01000000000','장의영','132@1.1','jang','0000','주례2동','2021-12-05 00:00:00'),(12,'vip','01000000000','황건웅','132@1.1','hwang','0000','주례2둥','2021-11-05 00:00:00'),(13,'normal','01000000000','최민식','123@1.1','choi1','0000','양정동','2021-10-05 00:00:00'),(14,'normal','01000000000','박진성','1@1.1','park','0000','양정동','2021-01-05 00:00:00'),(15,'normal','01000000000','박준혁','2@1.1','park1','0000','양정동','2021-12-01 00:00:00'),(16,'normal','01000000000','박기','3@1.1','park2','0000','사직동','2021-10-04 00:00:00'),(17,'normal','01000000000','최영아','4@1.1','choi1','0000','사직동','2021-12-05 00:00:00'),(18,'normal','01000000000','최준수','5@1.1','choi2','0000','사직동','2021-10-05 00:00:00'),(19,'normal','01000000000','최고','6@1.1','choi3','0000','연제동','2021-12-05 00:00:00'),(20,'normal','01000000000','장구','7@1.1','jang1','0000','연제동','2021-12-05 00:00:00'),(21,'normal','01012340000','태완','12@1.1','taewan','0000','좌동',NULL),(22,'normal','01022222222','장의영','1@1,1','jang123','1111','대저2동',NULL),(23,'normal','01022322223','김창수','1@1.1','kang','1111','좌동',NULL),(24,'normal','01022724575','김금례','kim@1.1','kim','1111','하단동',NULL),(25,'normal','-123012301230','박준혁','123123','park2','0000','베를린',NULL),(26,'normal','1232130321021303210','건 담','123@1.1','kun','1234','파주',NULL);
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
  `use_yn` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`member_num`,`coupon_num`),
  KEY `FK_restaurant_coupon_TO_member_coupon_1` (`coupon_num`),
  CONSTRAINT `FK_member_TO_member_coupon_1` FOREIGN KEY (`member_num`) REFERENCES `member` (`member_num`),
  CONSTRAINT `FK_restaurant_coupon_TO_member_coupon_1` FOREIGN KEY (`coupon_num`) REFERENCES `restaurant_coupon` (`coupon_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member_coupon`
--

LOCK TABLES `member_coupon` WRITE;
/*!40000 ALTER TABLE `member_coupon` DISABLE KEYS */;
INSERT INTO `member_coupon` VALUES (11,1,'2021-12-05 00:00:00','2021-12-05 12:00:00',0),(11,2,'2021-12-05 00:00:00','2021-12-05 12:00:00',0),(11,3,'2021-12-05 00:00:00','2021-12-05 12:00:00',0),(12,1,'2021-12-05 00:00:00','2021-12-05 12:00:00',0),(12,2,'2021-12-05 00:00:00','2021-12-05 12:00:00',0),(12,3,'2021-12-05 00:00:00','2021-12-05 12:00:00',0),(13,1,'2021-12-05 00:00:00','2021-12-05 12:00:00',0),(13,2,'2021-12-05 00:00:00','2021-12-05 12:00:00',0),(13,3,'2021-12-05 00:00:00','2021-12-05 12:00:00',0),(13,4,'2021-12-05 00:00:00','2021-12-05 12:00:00',0);
/*!40000 ALTER TABLE `member_coupon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member_play_history`
--

DROP TABLE IF EXISTS `member_play_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member_play_history` (
  `serial_num` int(11) NOT NULL AUTO_INCREMENT,
  `play_num` varchar(255) NOT NULL,
  `member_num` int(11) NOT NULL,
  `play_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  PRIMARY KEY (`serial_num`),
  KEY `FK_play_TO_member_play_history_1` (`play_num`),
  KEY `FK_member_TO_member_play_history_1` (`member_num`),
  CONSTRAINT `FK_member_TO_member_play_history_1` FOREIGN KEY (`member_num`) REFERENCES `member` (`member_num`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_play_TO_member_play_history_1` FOREIGN KEY (`play_num`) REFERENCES `play` (`play_num`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member_play_history`
--

LOCK TABLES `member_play_history` WRITE;
/*!40000 ALTER TABLE `member_play_history` DISABLE KEYS */;
INSERT INTO `member_play_history` VALUES (1,'1',11,'2021-12-05','2021-01-05'),(2,'2',11,'2021-12-05','2021-01-05'),(3,'3',11,'2021-12-05','2021-01-05'),(4,'1',12,'2021-12-05','2021-01-05'),(5,'2',12,'2021-12-05','2021-01-05'),(6,'3',12,'2021-12-05','2021-01-05'),(7,'1',11,'2021-12-05','2021-01-05'),(8,'2',11,'2021-12-05','2021-01-05'),(9,'3',12,'2021-12-05','2021-01-05'),(10,'1',12,'2021-12-05','2021-01-05');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
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
  `score_expiration` int(11) NOT NULL,
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
INSERT INTO `play` VALUES ('1',1,30,'member','reservation'),('2',2,30,'member','writeReview'),('3',3,30,'member','useCoupon'),('4',3,30,'restaurant','ad'),('5',3,30,'restaurant','publishCoupon'),('6',3,30,'restaurant','????');
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
  `rst_grade` varchar(500) NOT NULL DEFAULT 'normal',
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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES (1,11,1,'A','0510000000','주례2동','normal','2019-12-05 00:00:00','a','a',1,'2',4.3,21,20,1,15,1,10,1),(2,12,2,'B','0510000000','양정동','normal','2020-11-05 00:00:00','a','a',2,'2',4.1,84,60,2,15,2,10,1),(3,13,3,'C','0510000000','주례2동','normal','2020-12-05 00:00:00','a','a',3,'2',4.2,8489,486,3,15,0,10,1),(4,14,4,'D','0510000000','양정동','normal','2020-01-05 00:00:00','a','a',1,'2',4.3,4,1,4,15,0,10,1),(5,15,5,'E','0510000000','주례2동','normal','2020-12-05 00:00:00','a','a',2,'2',4.4,6,3,5,15,0,10,1),(6,16,2,'F','0510000000','주례2동','normal','2021-12-05 00:00:00','a','a',3,'2',4.1,6465,654,10,15,0,10,1),(7,17,3,'G','0510000000','사직동','normal','2021-12-05 00:00:00','a','a',1,'2',4.2,465,121,11,15,2,10,1),(8,18,4,'H','0510000000','사직동','normal','2020-12-05 00:00:00','a','a',2,'2',4.3,6,2,12,15,1,10,1),(9,19,1,'I','0510000000','주례2동','vip','2021-12-05 00:00:00','a','a',3,'2',4.4,54,15,13,15,0,10,1),(10,20,2,'J','0510000000','사직동','vip','2021-12-01 00:00:00','a','a',1,'2',4.5,2,1,14,15,1,10,1),(12,11,1,'인간식당','01023232323','좌동','normal','2021-12-07 00:35:53','서류파일','사진파일',23,'9',NULL,NULL,NULL,NULL,20,NULL,20,20),(13,11,1,'감나무네','0202020202','대저2동','normal','2021-12-07 00:40:02','서류파일','사진파일',9,'3',NULL,NULL,NULL,NULL,20,NULL,10,20),(14,11,1,'아빠갈비','101010101010','주례2동','normal','2021-12-07 17:23:05','서류파일','사진파일',8,'3',NULL,NULL,NULL,NULL,20,NULL,2,30),(15,11,1,'건웅소담','0101221212112','부암동','normal','2021-12-07 23:20:52','서류파일','사진파일',19,'1',NULL,NULL,NULL,NULL,40,NULL,30,10);
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant_category`
--

LOCK TABLES `restaurant_category` WRITE;
/*!40000 ALTER TABLE `restaurant_category` DISABLE KEYS */;
INSERT INTO `restaurant_category` VALUES (1,'한식'),(2,'일식'),(3,'중식'),(4,'양식'),(5,'카페'),(6,'etc');
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
  `coupon_end_yn` tinyint(1) DEFAULT '0',
  `count_man` int(11) NOT NULL DEFAULT '0',
  `use_possible_man` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`coupon_num`),
  KEY `FK_restaurant_menu_TO_restaurant_coupon_1` (`menu_num`),
  KEY `FK_restaurant_menu_TO_restaurant_coupon_2` (`rst_num`),
  CONSTRAINT `FK_restaurant_menu_TO_restaurant_coupon_1` FOREIGN KEY (`menu_num`) REFERENCES `restaurant_menu` (`menu_num`),
  CONSTRAINT `FK_restaurant_menu_TO_restaurant_coupon_2` FOREIGN KEY (`rst_num`) REFERENCES `restaurant_menu` (`rst_num`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant_coupon`
--

LOCK TABLES `restaurant_coupon` WRITE;
/*!40000 ALTER TABLE `restaurant_coupon` DISABLE KEYS */;
INSERT INTO `restaurant_coupon` VALUES (1,1,1,'A 10% 할인 쿠폰',10,'SALE','','2021-12-05 00:00:00',12,0,0,10),(2,2,1,'B 20% 충격 쿠폰',20,'SALE',NULL,'2021-12-05 00:00:00',12,0,0,20),(3,3,1,'C 30% 반토막 쿠폰',30,'SALE',NULL,'2021-12-05 00:00:00',12,0,0,30),(4,4,1,'사이다 무료 쿠폰',100,'SERVICE',NULL,'2021-12-05 00:00:00',12,0,0,40),(13,5,2,'메뉴5번 10%할인',10,'SALE',NULL,'2021-12-05 00:00:00',12,0,0,10),(14,6,2,'20%',20,'SALE',NULL,'2021-12-05 00:00:00',24,0,0,20),(15,7,2,'30%',30,'SALE',NULL,'2021-12-05 00:00:00',24,0,0,30),(16,8,2,'서비스',100,'SERVICE',NULL,'2021-12-05 00:00:00',24,0,0,40),(17,9,3,'10% 깍아줌',10,'SALE',NULL,'2021-12-05 00:00:00',24,0,0,10),(18,10,3,'20%나 깍아줌',20,'SALE',NULL,'2021-12-05 00:00:00',24,0,0,20),(19,10,3,'10% 더 깍아줌',10,'SALE',NULL,'2021-12-05 00:00:00',24,0,0,40);
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant_menu`
--

LOCK TABLES `restaurant_menu` WRITE;
/*!40000 ALTER TABLE `restaurant_menu` DISABLE KEYS */;
INSERT INTO `restaurant_menu` VALUES (1,1,'김치찜',5000,'메인'),(2,1,'콜라',1000,'음료'),(3,1,'곶감',1000,'디저트'),(4,1,'진로',2000,'술'),(5,2,'연어초밥',4000,'메인'),(6,2,'장어초밥',2000,'메인'),(7,2,'사이다',3000,'음료'),(8,2,'요거트',1000,'디저트'),(9,3,'짜장면',3000,'메인'),(10,3,'짬뽕',3000,'메인'),(11,3,'탕수육',3000,'메인'),(12,3,'콜라',3000,'음료'),(13,4,'베이컨샌드위치',4500,'메인'),(14,4,'베이컨토마토디럭스버거',4000,'메인'),(15,4,'콜라',1500,'음료'),(16,5,'요거트스무디',2000,'음료'),(17,5,'딸기스무디',1500,'음료'),(18,5,'레몬에이드',1000,'음료');
/*!40000 ALTER TABLE `restaurant_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant_play_history`
--

DROP TABLE IF EXISTS `restaurant_play_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant_play_history` (
  `serial_num` int(11) NOT NULL AUTO_INCREMENT,
  `play_num` varchar(255) NOT NULL,
  `rst_num` int(11) NOT NULL,
  `play_date` date NOT NULL,
  `end_date` date NOT NULL,
  PRIMARY KEY (`serial_num`),
  KEY `FK_play_TO_restaurant_play_history_1` (`play_num`),
  KEY `FK_restaurant_TO_restaurant_play_history_1` (`rst_num`),
  CONSTRAINT `FK_play_TO_restaurant_play_history_1` FOREIGN KEY (`play_num`) REFERENCES `play` (`play_num`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_restaurant_TO_restaurant_play_history_1` FOREIGN KEY (`rst_num`) REFERENCES `restaurant` (`rst_num`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant_play_history`
--

LOCK TABLES `restaurant_play_history` WRITE;
/*!40000 ALTER TABLE `restaurant_play_history` DISABLE KEYS */;
INSERT INTO `restaurant_play_history` VALUES (41,'3',1,'2021-12-05','2022-01-05'),(42,'4',1,'2021-12-05','2022-01-05'),(43,'3',3,'2021-12-05','2022-01-05'),(44,'4',3,'2021-12-05','2022-01-05'),(45,'3',4,'2021-12-05','2022-01-05'),(46,'4',4,'2021-12-05','2022-01-05'),(47,'3',5,'2021-12-05','2022-01-05'),(48,'4',5,'2021-12-05','2022-01-05'),(49,'3',6,'2021-12-05','2022-01-05'),(50,'4',6,'2021-12-05','2022-01-05'),(51,'3',7,'2021-12-05','2022-01-05'),(52,'4',7,'2021-12-05','2022-01-05'),(53,'3',8,'2021-12-05','2022-01-05'),(54,'4',8,'2021-12-05','2022-01-05');
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
  `arrive_predict_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`rsv_num`),
  KEY `FK_member_TO_restaurant_reservation_1` (`member_num`),
  KEY `FK_restaurant_TO_restaurant_reservation_1` (`rst_num`),
  CONSTRAINT `FK_member_TO_restaurant_reservation_1` FOREIGN KEY (`member_num`) REFERENCES `member` (`member_num`),
  CONSTRAINT `FK_restaurant_TO_restaurant_reservation_1` FOREIGN KEY (`rst_num`) REFERENCES `restaurant` (`rst_num`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant_reservation`
--

LOCK TABLES `restaurant_reservation` WRITE;
/*!40000 ALTER TABLE `restaurant_reservation` DISABLE KEYS */;
INSERT INTO `restaurant_reservation` VALUES (1,11,2,1,'이행','2020-11-06 00:00:00',1),(2,11,2,2,'이행','2020-11-07 00:00:00',1),(3,11,4,3,'이행','2020-01-15 00:00:00',1),(4,11,2,1,'이행','2020-11-25 00:00:00',1),(5,11,4,2,'이행','2020-02-05 00:00:00',1),(6,12,1,3,'이행','2020-12-04 00:00:00',1),(7,12,1,1,'이행','2019-12-05 00:00:00',1),(8,12,4,2,'이행','2020-01-05 00:00:00',1),(9,13,1,3,'이행','2019-12-05 00:00:00',1),(10,13,2,1,'이행','2020-11-05 00:00:00',1);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
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
  `rst_num` int(11) NOT NULL,
  `day` char(1) NOT NULL,
  `start_attime` int(11) DEFAULT NULL,
  `finish_attime` int(11) DEFAULT NULL,
  PRIMARY KEY (`rst_num`,`day`),
  CONSTRAINT `FK_restaurant_TO_sale_timezone_1` FOREIGN KEY (`rst_num`) REFERENCES `restaurant` (`rst_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sale_timezone`
--

LOCK TABLES `sale_timezone` WRITE;
/*!40000 ALTER TABLE `sale_timezone` DISABLE KEYS */;
INSERT INTO `sale_timezone` VALUES (1,'금',0,24),(1,'목',0,24),(1,'수',0,24),(1,'월',0,24),(1,'화',0,24),(2,'금',8,20),(2,'목',8,22),(2,'수',8,22),(2,'월',8,22),(2,'화',8,22);
/*!40000 ALTER TABLE `sale_timezone` ENABLE KEYS */;
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
  CONSTRAINT `FK_table_TO_table_history_1` FOREIGN KEY (`table_num`) REFERENCES `tables` (`table_num`),
  CONSTRAINT `FK_table_TO_table_history_2` FOREIGN KEY (`rst_num`) REFERENCES `restaurant` (`rst_num`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `table_history`
--

LOCK TABLES `table_history` WRITE;
/*!40000 ALTER TABLE `table_history` DISABLE KEYS */;
INSERT INTO `table_history` VALUES (1,1,1,NULL,NULL),(2,2,1,NULL,NULL),(3,3,1,NULL,NULL),(4,4,1,NULL,NULL),(5,5,2,NULL,NULL),(6,6,2,NULL,NULL),(7,7,2,NULL,NULL),(8,8,2,NULL,NULL),(9,9,3,NULL,NULL),(10,10,3,NULL,NULL),(11,11,3,NULL,NULL);
/*!40000 ALTER TABLE `table_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tables`
--

DROP TABLE IF EXISTS `tables`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tables` (
  `table_num` int(11) NOT NULL AUTO_INCREMENT,
  `rst_num` int(11) NOT NULL,
  `use_yn` tinyint(1) DEFAULT NULL,
  `rsv_yn` tinyint(1) DEFAULT NULL,
  `seat` int(11) DEFAULT NULL,
  PRIMARY KEY (`table_num`,`rst_num`),
  KEY `FK_restaurant_TO_table_1` (`rst_num`),
  CONSTRAINT `FK_restaurant_TO_table_1` FOREIGN KEY (`rst_num`) REFERENCES `restaurant` (`rst_num`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tables`
--

LOCK TABLES `tables` WRITE;
/*!40000 ALTER TABLE `tables` DISABLE KEYS */;
INSERT INTO `tables` VALUES (1,1,0,0,4),(2,1,0,1,4),(3,1,1,0,4),(4,1,1,0,4),(5,2,1,0,2),(6,2,1,1,2),(7,2,0,1,2),(8,2,0,0,2),(9,3,1,0,6),(10,3,0,1,6),(11,3,0,0,6);
/*!40000 ALTER TABLE `tables` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-07 23:58:27
