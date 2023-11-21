-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-11-2023 a las 17:05:36
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `articoding`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `access`
--

CREATE TABLE `access` (
  `user` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  `mode` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `assigned`
--

CREATE TABLE `assigned` (
  `group` int(11) NOT NULL,
  `level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`id`, `name`, `description`) VALUES
(1, 'Introducción', 'Comienza a jugar y aprende como funciona la aplicación.'),
(2, 'Variables', 'Aprende a almacenar y usar datos. Crea nuevas variables y utilízalas en tu código.'),
(3, 'Tipos de datos', 'Aprende a usar distintos tipos de datos en tu código como números, letras o palabras.'),
(4, 'Operadores básicos', 'Aprende las distintas operaciones que puedes hacer con los distintos tipos de datos.'),
(5, 'Bucles', 'Aprende a programar código que se repetirá un número determinado de veces concreto o mientras se cumpla una condición.'),
(6, 'Condiciones', 'Utiliza el tipo lógico visto anteriormente para crear código condicional.'),
(7, 'Funciones', 'Aprende a organizar tu código con el uso de funciones.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `group`
--

CREATE TABLE `group` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `level`
--

CREATE TABLE `level` (
  `id` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  `data` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `play`
--

CREATE TABLE `play` (
  `user` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  `stars` int(11) NOT NULL,
  `attempts` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `set`
--

CREATE TABLE `set` (
  `group` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `role` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  `role` varchar(25) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `access`
--
ALTER TABLE `access`
  ADD KEY `user` (`user`,`level`),
  ADD KEY `level` (`level`);

--
-- Indices de la tabla `assigned`
--
ALTER TABLE `assigned`
  ADD KEY `group` (`group`,`level`),
  ADD KEY `level` (`level`);

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `group`
--
ALTER TABLE `group`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `level`
--
ALTER TABLE `level`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user` (`user`,`category`),
  ADD KEY `category` (`category`);

--
-- Indices de la tabla `play`
--
ALTER TABLE `play`
  ADD KEY `user` (`user`,`level`),
  ADD KEY `level` (`level`);

--
-- Indices de la tabla `set`
--
ALTER TABLE `set`
  ADD KEY `group` (`group`,`user`),
  ADD KEY `user` (`user`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `group`
--
ALTER TABLE `group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `level`
--
ALTER TABLE `level`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `access`
--
ALTER TABLE `access`
  ADD CONSTRAINT `access_ibfk_1` FOREIGN KEY (`level`) REFERENCES `level` (`id`),
  ADD CONSTRAINT `access_ibfk_2` FOREIGN KEY (`user`) REFERENCES `user` (`id`);

--
-- Filtros para la tabla `assigned`
--
ALTER TABLE `assigned`
  ADD CONSTRAINT `assigned_ibfk_1` FOREIGN KEY (`group`) REFERENCES `group` (`id`),
  ADD CONSTRAINT `assigned_ibfk_2` FOREIGN KEY (`level`) REFERENCES `level` (`id`);

--
-- Filtros para la tabla `level`
--
ALTER TABLE `level`
  ADD CONSTRAINT `level_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `level_ibfk_2` FOREIGN KEY (`category`) REFERENCES `category` (`id`);

--
-- Filtros para la tabla `play`
--
ALTER TABLE `play`
  ADD CONSTRAINT `play_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `play_ibfk_2` FOREIGN KEY (`level`) REFERENCES `level` (`id`);

--
-- Filtros para la tabla `set`
--
ALTER TABLE `set`
  ADD CONSTRAINT `set_ibfk_1` FOREIGN KEY (`group`) REFERENCES `group` (`id`),
  ADD CONSTRAINT `set_ibfk_2` FOREIGN KEY (`user`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
