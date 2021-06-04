-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        8.0.23 - MySQL Community Server - GPL
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- 导出 huor 的数据库结构
CREATE DATABASE IF NOT EXISTS `huor` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `huor`;

-- 导出  表 huor.activity 结构
CREATE TABLE IF NOT EXISTS `activity` (
  `ID` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `title` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `address` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `order_id` int NOT NULL DEFAULT '0',
  `create_time` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `start_time` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `update_time` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `delete_time` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `access_num` int(10) unsigned zerofill DEFAULT NULL,
  `join_num` int(10) unsigned zerofill DEFAULT NULL,
  `limit_num` int(10) unsigned zerofill NOT NULL,
  `like_num` int(10) unsigned zerofill DEFAULT NULL,
  `state` tinyint DEFAULT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_bin,
  `tag` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `collection` tinyint DEFAULT '0',
  `join_status` tinyint DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `up_index` (`ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  huor.activity 的数据：~15 rows (大约)
/*!40000 ALTER TABLE `activity` DISABLE KEYS */;
INSERT INTO `activity` (`ID`, `title`, `address`, `order_id`, `create_time`, `start_time`, `update_time`, `delete_time`, `access_num`, `join_num`, `limit_num`, `like_num`, `state`, `description`, `tag`, `collection`, `join_status`) VALUES
	(0000000061, 'test', '456', 696131573, '2021/05/03 13:21:10', '2021-01-01 08:00', '2021-01-01 12:00', NULL, 0000000000, 0000000001, 0000000100, 0000000000, 1, 'test', '0', 0, 0),
	(0000000063, 'study plan', 'fb 123', 1237008945, '2021/05/03 13:35:41', '2021-01-01 08:00', '2021-01-01 12:00', NULL, 0000000000, 0000000001, 0000000010, 0000000000, 1, 'hello world', '0', 0, 0),
	(0000000064, 'study~for final exam', 'CB', 200742402, '2021/05/03 13:37:25', '2021-05-06 08:00', '2021-05-06 12:00', NULL, 0000000000, 0000000001, 0000000003, 0000000000, 1, 'let\'s study together!!!!', '0', 1, 1),
	(0000000065, 'test', '圆融', 527173538, '2021/05/03 14:10:58', '2021-05-03 16:00', '2021-05-03 18:00', NULL, 0000000000, 0000000001, 0000000002, 0000000000, 2, 'test', '0', 1, 0),
	(0000000066, 'study together', 'library', 401641208, '2021/05/03 15:57:55', '2021-05-07 08:00', '2021-05-07 12:00', NULL, 0000000000, 0000000001, 0000000004, 0000000000, 1, 'prepare for final exam', '0', 0, 0),
	(0000000067, 'test', '圆融', 965549872, '2021/05/03 16:44:09', '2021-05-04 12:00', '2021-05-04 14:00', NULL, 0000000000, 0000000001, 0000000003, 0000000000, 2, 'let\'s go!', '0', 0, 1),
	(0000000068, 'have lunch', '宏愿', 1811969462, '2021/05/03 22:20:58', '2021-05-07 12:00', '2021-05-07 13:00', NULL, 0000000000, 0000000001, 0000000003, 0000000000, 3, 'let\'s eat together~~', '0', 0, 0),
	(0000000069, 'study', 'CB', 1765015273, '2021/05/03 22:33:25', '2021-05-05 08:00', '2021-05-05 12:00', NULL, 0000000000, 0000000001, 0000000004, 0000000000, 1, 'test..', '0', 0, 0),
	(0000000070, 'have lunch', '宏愿', 1606764900, '2021/05/03 22:48:27', '2021-05-05 12:00', '2021-05-05 14:00', NULL, 0000000000, 0000000001, 0000000003, 0000000000, 3, 'let\'s eat~', '0', 0, 0),
	(0000000071, 'leacture', 'CB', 1649339790, '2021/05/04 02:45:50', '2021-05-04 12:00', '2021-05-04 13:00', NULL, 0000000000, 0000000001, 0000000050, 0000000000, 4, 'take your ID card!', '0', 1, 0),
	(0000000072, 'CPT202 LECTURE', 'SD224', 1667504401, '2021/05/04 02:49:21', '2021-05-04 09:00', '2021-05-04 12:00', NULL, 0000000000, 0000000001, 0000000050, 0000000000, 1, 'ID card!!!', '0', 0, 0),
	(0000000073, 'cpt202', 'SD223', 1956763442, '2021/05/04 09:47:44', '2021-05-04 08:00', '2021-05-04 13:00', NULL, 0000000000, 0000000001, 0000000050, 0000000000, 1, '...', '0', 0, 0),
	(0000000074, 'test', 'add', 1186229940, '2021/05/15 19:11:32', '2021-01-01 08:00', '2021-01-01 12:00', NULL, 0000000000, 0000000001, 0000000010, 0000000000, 2, 'des', '0', 0, 0),
	(0000000075, 'test', 'add', 1576635166, '2021/05/15 19:11:48', '2021-01-01 08:00', '2021-01-01 12:00', NULL, 0000000000, 0000000001, 0000000010, 0000000000, 3, 'des', '0', 0, 0),
	(0000000076, '12', '12', 491515158, '2021/05/19 14:29:01', '2021-01-01 08:00', '2021-01-01 12:00', NULL, 0000000000, 0000000001, 0000000001, 0000000000, 1, '12', '0', 0, 0);
/*!40000 ALTER TABLE `activity` ENABLE KEYS */;

-- 导出  表 huor.draft 结构
CREATE TABLE IF NOT EXISTS `draft` (
  `ID` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `address` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `order_id` int NOT NULL,
  `create_time` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `start_time` varchar(20) DEFAULT NULL,
  `update_time` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `delete_time` varchar(20) DEFAULT NULL,
  `access_num` int unsigned DEFAULT '0',
  `join_num` int unsigned DEFAULT '0',
  `limit_num` int unsigned DEFAULT '0',
  `like_num` int unsigned DEFAULT '0',
  `state` tinyint DEFAULT NULL,
  `description` text,
  `tag` varchar(50) DEFAULT NULL,
  `collection` tinyint DEFAULT '0',
  `join_status` tinyint DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `up_index` (`ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 正在导出表  huor.draft 的数据：~8 rows (大约)
/*!40000 ALTER TABLE `draft` DISABLE KEYS */;
INSERT INTO `draft` (`ID`, `title`, `address`, `order_id`, `create_time`, `start_time`, `update_time`, `delete_time`, `access_num`, `join_num`, `limit_num`, `like_num`, `state`, `description`, `tag`, `collection`, `join_status`) VALUES
	(14, 'lunch', '宏愿', 1172398260, '2021/05/03 14:13:13', '2021-05-07 13:00', '2021-05-07 14:00', NULL, 0, 1, 2, 0, 3, 'let\'s have lunch together!', '0', 0, 0),
	(15, 'lunch', '宏愿', 1779191562, '2021/05/03 14:13:20', '2021-05-07 13:00', '2021-05-07 14:00', NULL, 0, 1, 2, 0, 3, 'let\'s have lunch together!', '0', 0, 0),
	(16, 'test', '', 1102211506, '2021/05/03 16:08:26', '2021-01-01 08:00', '2021-01-01 12:00', NULL, 0, 1, 0, 0, 0, '', '0', 0, 0),
	(17, 'test', '', 1465531867, '2021/05/03 16:48:41', '2021-01-01 08:00', '2021-01-01 12:00', NULL, 0, 1, 0, 0, 1, '', '0', 0, 0),
	(18, '....', '', 2073381993, '2021/05/03 22:52:35', '2021-01-01 08:00', '2021-01-01 12:00', NULL, 0, 1, 9, 0, 1, '', '0', 0, 0),
	(19, '........', '', 938672360, '2021/05/04 09:51:00', '2021-01-01 08:00', '2021-01-01 12:00', NULL, 0, 1, 0, 0, 1, '', '0', 0, 0),
	(20, 'test999', 'virtual addr', 2100771940, '2021/05/19 14:01:08', '2021-05-19 17:00', '2021-05-21 13:00', NULL, 0, 1, 8, 0, 0, 'thisisdescription', '0', 0, 0),
	(21, '123', 'addr', 1964228331, '2021/05/19 14:16:01', '2021-01-01 08:00', '2021-01-01 12:00', NULL, 0, 1, 10, 0, 0, 'desc', '0', 0, 0),
	(22, '123', 'addr', 1856361098, '2021/05/19 14:19:16', '2021-01-01 08:00', '2021-01-01 12:00', NULL, 0, 1, 10, 0, 0, 'des', '0', 0, 0),
	(23, '123', 'test', 2107804624, '2021/05/19 14:22:52', '2021-01-01 08:00', '2021-01-01 12:00', NULL, 0, 1, 10, 0, 1, 'test', '0', 0, 0);
/*!40000 ALTER TABLE `draft` ENABLE KEYS */;

-- 导出  表 huor.user 结构
CREATE TABLE IF NOT EXISTS `user` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `openid` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `nickname` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `unify_uid` int DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `mobile` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `wx_profile` json DEFAULT NULL,
  `create_time` datetime(3) DEFAULT CURRENT_TIMESTAMP(3),
  `update_time` datetime(3) DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  `delete_time` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uni_openid` (`openid`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 正在导出表  huor.user 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `openid`, `nickname`, `unify_uid`, `email`, `password`, `mobile`, `wx_profile`, `create_time`, `update_time`, `delete_time`) VALUES
	(34, 'o0Nuq5a8XZsDIkW8qZxFr4AxWjIc', NULL, NULL, NULL, NULL, NULL, NULL, '2021-05-15 09:39:53.326', '2021-05-15 09:39:53.326', NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
