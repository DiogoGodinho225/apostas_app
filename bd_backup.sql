CREATE DATABASE  IF NOT EXISTS `apostas_app` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `apostas_app`;
-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: apostas_app
-- ------------------------------------------------------
-- Server version	5.7.44

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
-- Table structure for table `bet_lines`
--

DROP TABLE IF EXISTS `bet_lines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bet_lines` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `bet_id` int(11) NOT NULL,
  `league_id` int(11) NOT NULL,
  `match` varchar(200) NOT NULL,
  `prediction` varchar(200) NOT NULL,
  `odd` float NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_bet_lines_bets1_idx` (`bet_id`),
  KEY `fk_bet_lines_leagues1_idx` (`league_id`),
  CONSTRAINT `fk_bet_lines_bets1` FOREIGN KEY (`bet_id`) REFERENCES `bets` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_bet_lines_leagues1` FOREIGN KEY (`league_id`) REFERENCES `leagues` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bet_lines`
--

LOCK TABLES `bet_lines` WRITE;
/*!40000 ALTER TABLE `bet_lines` DISABLE KEYS */;
/*!40000 ALTER TABLE `bet_lines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bets`
--

DROP TABLE IF EXISTS `bets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `bet_type` int(11) NOT NULL,
  `stake` int(11) NOT NULL,
  `odds` float NOT NULL,
  `result` varchar(100) NOT NULL,
  `profit` float NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_bets_users1_idx` (`user_id`),
  CONSTRAINT `fk_bets_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bets`
--

LOCK TABLES `bets` WRITE;
/*!40000 ALTER TABLE `bets` DISABLE KEYS */;
/*!40000 ALTER TABLE `bets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(60) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'images/users/user.png','2025-06-19 15:44:51','2025-06-19 15:44:51'),(2,'images/users/teste.png','2025-06-20 12:15:37','2025-06-20 12:15:37');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leagues`
--

DROP TABLE IF EXISTS `leagues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leagues` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `img_id` int(11) NOT NULL,
  `country` varchar(200) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_leagues_images1_idx` (`img_id`),
  CONSTRAINT `fk_leagues_images1` FOREIGN KEY (`img_id`) REFERENCES `images` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leagues`
--

LOCK TABLES `leagues` WRITE;
/*!40000 ALTER TABLE `leagues` DISABLE KEYS */;
/*!40000 ALTER TABLE `leagues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `league_id` int(11) NOT NULL,
  `img_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_teams_images1_idx` (`img_id`),
  KEY `fk_teams_leagues1_idx` (`league_id`),
  CONSTRAINT `fk_teams_images1` FOREIGN KEY (`img_id`) REFERENCES `images` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_teams_leagues1` FOREIGN KEY (`league_id`) REFERENCES `leagues` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions_types`
--

DROP TABLE IF EXISTS `transactions_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactions_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions_types`
--

LOCK TABLES `transactions_types` WRITE;
/*!40000 ALTER TABLE `transactions_types` DISABLE KEYS */;
INSERT INTO `transactions_types` VALUES (1,'Depósto','2025-06-24 10:21:56','2025-06-24 10:23:19'),(2,'Levantamento','2025-06-24 10:21:56','2025-06-24 10:23:19'),(3,'Aposta Devolvida','2025-06-24 10:21:56','2025-06-24 10:23:19'),(4,'Aposta Ganha','2025-06-24 10:21:56','2025-06-24 10:23:19'),(5,'Aposta Perdida','2025-06-24 10:21:56','2025-06-24 10:23:19'),(6,'Free Bets','2025-06-24 10:21:56','2025-06-24 10:23:19');
/*!40000 ALTER TABLE `transactions_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `profile_pic_id` int(11) NOT NULL DEFAULT '1',
  `last_login` datetime NOT NULL,
  `status` varchar(45) NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_users_images_idx` (`profile_pic_id`),
  CONSTRAINT `fk_users_images` FOREIGN KEY (`profile_pic_id`) REFERENCES `images` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (6,'God','diogosimoes225@gmail.com','$2b$12$BY1UbYIG9ey1iln0sHSWA..OrAZeJ4oAv6zpEeEpXOoKCmXBhZLTa',2,'2025-06-24 08:12:40','1','2025-06-19 15:53:57','2025-06-24 09:12:39'),(7,'Diogo','diogosimoes@gmail.com','$2b$12$40GhENO0vsX0UO.xXDWLGOjaEvZGvTqgvh3RNs1I9UaCzXn9YHd6q',1,'2025-06-19 15:59:56','1','2025-06-19 15:59:56','2025-06-19 15:59:56'),(8,'teste','teste@gmail.com','$2b$12$bA.VhoSY7D3rsSl5x0R/5ucKE8Ajd/F31/6IDazqP4ji9m5PFKUKi',1,'2025-06-22 12:50:27','1','2025-06-22 12:50:27','2025-06-22 12:50:27'),(9,'Diogoo','diogo@gmail.com','$2b$12$F6t/mYFzxx8ZPLs5cf7Dz.05fELX2DzjDnBq/kOnVegsJH/NX4z8y',1,'2025-06-22 12:51:59','1','2025-06-22 12:51:59','2025-06-22 12:51:59');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wallet`
--

DROP TABLE IF EXISTS `wallet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wallet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `balance` float NOT NULL,
  `stake` float NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_wallet_users1_idx` (`user_id`),
  CONSTRAINT `fk_wallet_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wallet`
--

LOCK TABLES `wallet` WRITE;
/*!40000 ALTER TABLE `wallet` DISABLE KEYS */;
INSERT INTO `wallet` VALUES (1,6,500,0,'2025-06-22 12:33:38','2025-06-24 12:31:22'),(2,7,0,0,'2025-06-22 12:33:38','2025-06-22 12:33:38'),(3,9,0,0,'2025-06-22 12:51:59','2025-06-22 12:51:59');
/*!40000 ALTER TABLE `wallet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wallet_transactions`
--

DROP TABLE IF EXISTS `wallet_transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wallet_transactions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `type_id` int(11) NOT NULL,
  `amount` float NOT NULL,
  `balance` float NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_wallet_transactions_users1_idx` (`user_id`),
  KEY `fk_wallet_transactions_trasactions_types1_idx` (`type_id`),
  CONSTRAINT `fk_wallet_transactions_trasactions_types1` FOREIGN KEY (`type_id`) REFERENCES `transactions_types` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_wallet_transactions_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wallet_transactions`
--

LOCK TABLES `wallet_transactions` WRITE;
/*!40000 ALTER TABLE `wallet_transactions` DISABLE KEYS */;
INSERT INTO `wallet_transactions` VALUES (1,6,1,10,1010,'2025-06-23 13:04:14','2025-06-23 13:04:14'),(2,6,1,10,1020,'2025-06-24 09:23:24','2025-06-24 09:23:24'),(3,6,1,10,1030,'2025-06-24 09:23:25','2025-06-24 09:23:25'),(4,6,1,10,1040,'2025-06-24 09:23:35','2025-06-24 09:23:35'),(5,6,1,10,1050,'2025-06-24 09:23:40','2025-06-24 09:23:40'),(6,6,1,10,1060,'2025-06-24 09:23:40','2025-06-24 09:23:40'),(7,6,1,10,1070,'2025-06-24 09:23:40','2025-06-24 09:23:40'),(8,6,1,10,1080,'2025-06-24 09:23:40','2025-06-24 09:23:40'),(9,6,1,10,1090,'2025-06-24 09:23:40','2025-06-24 09:23:40'),(10,6,1,10,1100,'2025-06-24 09:23:40','2025-06-24 09:23:40'),(11,6,1,10,1110,'2025-06-24 09:23:41','2025-06-24 09:23:41'),(12,6,1,10,1120,'2025-06-24 09:23:54','2025-06-24 09:23:54'),(13,6,1,10,1130,'2025-06-24 09:26:18','2025-06-24 09:26:18'),(14,6,1,10,1140,'2025-06-24 09:28:50','2025-06-24 09:28:50'),(15,6,1,20,1160,'2025-06-24 09:40:53','2025-06-24 09:40:53'),(16,6,1,100000,101160,'2025-06-24 09:48:40','2025-06-24 09:48:40'),(17,6,1,1000000000000,1000000000000,'2025-06-24 09:52:49','2025-06-24 09:52:49'),(18,6,1,10,110,'2025-06-24 09:53:43','2025-06-24 09:53:43'),(19,6,1,10,120,'2025-06-24 10:32:29','2025-06-24 10:32:29'),(20,6,1,333,453,'2025-06-24 11:05:16','2025-06-24 11:05:16'),(21,6,1,47,500,'2025-06-24 11:31:22','2025-06-24 11:31:22');
/*!40000 ALTER TABLE `wallet_transactions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-24 14:58:00
