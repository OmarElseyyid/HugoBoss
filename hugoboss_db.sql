-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 16, 2021 at 02:20 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hugoboss_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `fabrika`
--

DROP TABLE IF EXISTS `fabrika`;
CREATE TABLE IF NOT EXISTS `fabrika` (
  `fabrika_id` int(11) NOT NULL AUTO_INCREMENT,
  `fabrika_adi` varchar(256) NOT NULL,
  `fabrika_kapasite` int(11) NOT NULL,
  PRIMARY KEY (`fabrika_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf32;

--
-- Dumping data for table `fabrika`
--

INSERT INTO `fabrika` (`fabrika_id`, `fabrika_adi`, `fabrika_kapasite`) VALUES
(1, 'P1', 1200000),
(2, 'P2', 500000),
(3, 'P3', 1450000);

-- --------------------------------------------------------

--
-- Table structure for table `siparis`
--

DROP TABLE IF EXISTS `siparis`;
CREATE TABLE IF NOT EXISTS `siparis` (
  `siparis_id` int(11) NOT NULL AUTO_INCREMENT,
  `siparis_urun_id` int(11) NOT NULL,
  `siparis_teslim_tarihi` date NOT NULL,
  `siparis_adeti` int(11) NOT NULL,
  PRIMARY KEY (`siparis_id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf32;

--
-- Dumping data for table `siparis`
--

INSERT INTO `siparis` (`siparis_id`, `siparis_urun_id`, `siparis_teslim_tarihi`, `siparis_adeti`) VALUES
(1, 2, '2021-11-29', 234),
(2, 2, '2021-11-29', 234),
(3, 2, '2021-12-08', 324),
(4, 3, '2021-12-24', 324),
(5, 3, '2021-11-29', 324),
(6, 3, '2021-12-09', 324),
(7, 2, '2021-12-10', 324),
(8, 4, '2021-12-10', 6546),
(9, 4, '2021-12-06', 356),
(10, 4, '2021-12-06', 356),
(11, 4, '2021-12-09', 32456),
(12, 3, '2021-12-09', 345),
(13, 2, '2021-11-29', 34);

-- --------------------------------------------------------

--
-- Table structure for table `stoktakiurunler`
--

DROP TABLE IF EXISTS `stoktakiurunler`;
CREATE TABLE IF NOT EXISTS `stoktakiurunler` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `adi` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf32;

--
-- Dumping data for table `stoktakiurunler`
--

INSERT INTO `stoktakiurunler` (`id`, `adi`) VALUES
(1, 'BAYAN GİYİM AYAKKABI ÇANTASI'),
(2, 'BAYAN GİYİM BLUZ'),
(3, 'BAYAN GİYİM CEKET'),
(4, 'BAYAN GİYİM ELBİSE'),
(5, 'BAYAN GİYİM ETEK'),
(6, 'BAYAN GİYİM PALTO'),
(7, 'BAYAN GİYİM PANTOLON'),
(8, 'ERKEK GİYİM CEKET'),
(9, 'ERKEK GİYİM GÖMLEK'),
(10, 'ERKEK GİYİM PALTO'),
(11, 'ERKEK GİYİM PANTOLON'),
(12, 'ERKEK GİYİM TAKIM ELBİSE'),
(13, 'ERKEK GİYİM YELEK'),
(14, 'ERKEK JERSEY TİSÖRT');

-- --------------------------------------------------------

--
-- Table structure for table `urun`
--

DROP TABLE IF EXISTS `urun`;
CREATE TABLE IF NOT EXISTS `urun` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `urun_id` int(11) NOT NULL,
  `urun_adeti` int(11) NOT NULL,
  `urun_teslim_tarihi` date NOT NULL,
  `fabrika_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf32;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(256) NOT NULL,
  `user_pass` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf32;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_name`, `user_pass`) VALUES
(1, 'Admin', '123321');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
