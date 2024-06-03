-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-05-2024 a las 09:05:54
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `escacs_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historial`
--

CREATE TABLE `historial` (
  `partides_expulsat` int(11) NOT NULL,
  `id_usuari` int(11) NOT NULL,
  `partides_guanyades` int(11) NOT NULL,
  `partides_perdudes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partida`
--

CREATE TABLE `partida` (
  `id_jugador1` int(11) NOT NULL,
  `id_jugador2` int(11) NOT NULL,
  `torn_actual` varchar(64) NOT NULL,
  `torn_ultim` varchar(64) NOT NULL,
  `id_partida` int(11) NOT NULL,
  `torn1` varchar(16) DEFAULT NULL,
  `torn2` varchar(16) DEFAULT NULL,
  `torn3` varchar(16) DEFAULT NULL,
  `torn4` varchar(16) DEFAULT NULL,
  `torn5` varchar(16) DEFAULT NULL,
  `torn6` varchar(16) DEFAULT NULL,
  `torn7` varchar(16) DEFAULT NULL,
  `torn8` varchar(16) DEFAULT NULL,
  `torn9` varchar(16) DEFAULT NULL,
  `torn10` varchar(16) DEFAULT NULL,
  `torn11` varchar(16) DEFAULT NULL,
  `torn12` varchar(16) DEFAULT NULL,
  `torn13` varchar(16) DEFAULT NULL,
  `torn14` varchar(16) DEFAULT NULL,
  `torn15` varchar(16) DEFAULT NULL,
  `torn16` varchar(16) DEFAULT NULL,
  `torn17` varchar(16) DEFAULT NULL,
  `torn18` varchar(16) DEFAULT NULL,
  `torn19` varchar(16) DEFAULT NULL,
  `torn20` varchar(16) DEFAULT NULL,
  `torn21` varchar(16) DEFAULT NULL,
  `torn22` varchar(16) DEFAULT NULL,
  `torn23` varchar(16) DEFAULT NULL,
  `torn24` varchar(16) DEFAULT NULL,
  `torn25` varchar(16) DEFAULT NULL,
  `torn26` varchar(16) DEFAULT NULL,
  `torn27` varchar(16) DEFAULT NULL,
  `torn28` varchar(16) DEFAULT NULL,
  `torn29` varchar(16) DEFAULT NULL,
  `torn30` varchar(16) DEFAULT NULL,
  `torn31` varchar(16) DEFAULT NULL,
  `torn32` varchar(16) DEFAULT NULL,
  `torn33` varchar(16) DEFAULT NULL,
  `torn34` varchar(16) DEFAULT NULL,
  `torn35` varchar(16) DEFAULT NULL,
  `torn36` varchar(16) DEFAULT NULL,
  `torn37` varchar(16) DEFAULT NULL,
  `torn38` varchar(16) DEFAULT NULL,
  `torn39` varchar(16) DEFAULT NULL,
  `torn40` varchar(16) DEFAULT NULL,
  `torn41` varchar(16) DEFAULT NULL,
  `torn42` varchar(16) DEFAULT NULL,
  `torn43` varchar(16) DEFAULT NULL,
  `torn44` varchar(16) DEFAULT NULL,
  `torn45` varchar(16) DEFAULT NULL,
  `torn46` varchar(16) DEFAULT NULL,
  `torn47` varchar(16) DEFAULT NULL,
  `torn48` varchar(16) DEFAULT NULL,
  `torn49` varchar(16) DEFAULT NULL,
  `torn50` varchar(16) DEFAULT NULL,
  `torn51` varchar(16) DEFAULT NULL,
  `torn52` varchar(16) DEFAULT NULL,
  `torn53` varchar(16) DEFAULT NULL,
  `torn54` varchar(16) DEFAULT NULL,
  `torn55` varchar(16) DEFAULT NULL,
  `torn56` varchar(16) DEFAULT NULL,
  `torn57` varchar(16) DEFAULT NULL,
  `torn58` varchar(16) DEFAULT NULL,
  `torn59` varchar(16) DEFAULT NULL,
  `torn60` varchar(16) DEFAULT NULL,
  `torn61` varchar(16) DEFAULT NULL,
  `torn62` varchar(16) DEFAULT NULL,
  `torn63` varchar(16) DEFAULT NULL,
  `torn64` varchar(16) DEFAULT NULL,
  `torn65` varchar(16) DEFAULT NULL,
  `torn66` varchar(16) DEFAULT NULL,
  `torn67` varchar(16) DEFAULT NULL,
  `torn68` varchar(16) DEFAULT NULL,
  `torn69` varchar(16) DEFAULT NULL,
  `torn70` varchar(16) DEFAULT NULL,
  `torn71` varchar(16) DEFAULT NULL,
  `torn72` varchar(16) DEFAULT NULL,
  `torn73` varchar(16) DEFAULT NULL,
  `torn74` varchar(16) DEFAULT NULL,
  `torn75` varchar(16) DEFAULT NULL,
  `torn76` varchar(16) DEFAULT NULL,
  `torn77` varchar(16) DEFAULT NULL,
  `torn78` varchar(16) DEFAULT NULL,
  `torn79` varchar(16) DEFAULT NULL,
  `torn80` varchar(16) DEFAULT NULL,
  `torn81` varchar(16) DEFAULT NULL,
  `torn82` varchar(16) DEFAULT NULL,
  `torn83` varchar(16) DEFAULT NULL,
  `torn84` varchar(16) DEFAULT NULL,
  `torn85` varchar(16) DEFAULT NULL,
  `torn86` varchar(16) DEFAULT NULL,
  `torn87` varchar(16) DEFAULT NULL,
  `torn88` varchar(16) DEFAULT NULL,
  `torn89` varchar(16) DEFAULT NULL,
  `torn90` varchar(16) DEFAULT NULL,
  `torn91` varchar(16) DEFAULT NULL,
  `torn92` varchar(16) DEFAULT NULL,
  `torn93` varchar(16) DEFAULT NULL,
  `torn94` varchar(16) DEFAULT NULL,
  `torn95` varchar(16) DEFAULT NULL,
  `torn96` varchar(16) DEFAULT NULL,
  `torn97` varchar(16) DEFAULT NULL,
  `torn98` varchar(16) DEFAULT NULL,
  `torn99` varchar(16) DEFAULT NULL,
  `torn100` varchar(16) DEFAULT NULL,
  `torn101` varchar(16) DEFAULT NULL,
  `torn102` varchar(16) DEFAULT NULL,
  `torn103` varchar(16) DEFAULT NULL,
  `torn104` varchar(16) DEFAULT NULL,
  `torn105` varchar(16) DEFAULT NULL,
  `torn106` varchar(16) DEFAULT NULL,
  `torn107` varchar(16) DEFAULT NULL,
  `torn108` varchar(16) DEFAULT NULL,
  `torn109` varchar(16) DEFAULT NULL,
  `torn110` varchar(16) DEFAULT NULL,
  `torn111` varchar(16) DEFAULT NULL,
  `torn112` varchar(16) DEFAULT NULL,
  `torn113` varchar(16) DEFAULT NULL,
  `torn114` varchar(16) DEFAULT NULL,
  `torn115` varchar(16) DEFAULT NULL,
  `torn116` varchar(16) DEFAULT NULL,
  `torn117` varchar(16) DEFAULT NULL,
  `torn118` varchar(16) DEFAULT NULL,
  `torn119` varchar(16) DEFAULT NULL,
  `torn120` varchar(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuaris`
--

CREATE TABLE `usuaris` (
  `id_usuari` int(11) NOT NULL,
  `nom_usuari` varchar(15) NOT NULL,
  `nom_public` varchar(25) NOT NULL,
  `imatge_perfil` varchar(255) NOT NULL,
  `contrassenya` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuaris`
--

INSERT INTO `usuaris` (`id_usuari`, `nom_usuari`, `nom_public`, `imatge_perfil`, `contrassenya`) VALUES
(1, 'mreal-ca', 'mreal-ca', '', '$argon2id$v=19$m=2048,t=10,p=1$Wm5Zcm4vY1FPS3laSzF2Zw$jAbRSrt8WUblm8GkaNld+i1VTA'),
(2, 'marc', 'marc', '', '$argon2id$v=19$m=2048,t=10,p=1$T0ZWZmVEVkNma050Njg4Zg$iRwJFMiIkW7cFL8iNps5njiVDgsD8wdhGQ3fpP0GfJw');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `historial`
--
ALTER TABLE `historial`
  ADD PRIMARY KEY (`id_usuari`);

--
-- Indices de la tabla `partida`
--
ALTER TABLE `partida`
  ADD PRIMARY KEY (`id_partida`);

--
-- Indices de la tabla `usuaris`
--
ALTER TABLE `usuaris`
  ADD PRIMARY KEY (`id_usuari`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `partida`
--
ALTER TABLE `partida`
  MODIFY `id_partida` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuaris`
--
ALTER TABLE `usuaris`
  MODIFY `id_usuari` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
