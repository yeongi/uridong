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
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `member_num` int(11) NOT NULL,
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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-05 22:18:18
