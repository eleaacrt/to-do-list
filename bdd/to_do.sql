-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 04 avr. 2023 à 19:46
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `to_do`
--

-- --------------------------------------------------------

--
-- Structure de la table `state`
--

DROP TABLE IF EXISTS `state`;
CREATE TABLE IF NOT EXISTS `state` (
  `id_state` int NOT NULL AUTO_INCREMENT,
  `state` varchar(20) NOT NULL,
  `state_res` varchar(1) NOT NULL,
  PRIMARY KEY (`id_state`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `state`
--

INSERT INTO `state` (`id_state`, `state`, `state_res`) VALUES
(1, 'À faire', '☐'),
(2, 'En cours', '✎'),
(3, 'Fait', '✔'),
(4, 'En retard', '⏱');

-- --------------------------------------------------------

--
-- Structure de la table `task`
--

DROP TABLE IF EXISTS `task`;
CREATE TABLE IF NOT EXISTS `task` (
  `id_task` int NOT NULL AUTO_INCREMENT,
  `task` varchar(500) NOT NULL,
  `ext_state` int NOT NULL,
  PRIMARY KEY (`id_task`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `task`
--

INSERT INTO `task` (`id_task`, `task`, `ext_state`) VALUES
(1, 'Nom de tâche', 1),
(2, 'Nom de tâche', 2),
(3, 'Nom de tâche', 3),
(4, 'Nom de tâche', 4);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
