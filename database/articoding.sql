-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 12-02-2024 a las 22:13:33
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `assigned`
--

CREATE TABLE `assigned` (
  `group` int(11) NOT NULL,
  `level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `group`
--

INSERT INTO `group` (`id`, `name`) VALUES
(15, 'Grupo 5'),
(16, 'Grupo 5'),
(17, 'A:K');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `level`
--

CREATE TABLE `level` (
  `id` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `self` int(11) DEFAULT NULL,
  `title` varchar(50) NOT NULL,
  `data` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `level`
--

INSERT INTO `level` (`id`, `user`, `category`, `self`, `title`, `data`) VALUES
(1, 1, 1, 1, 'El secreto de Pascual', '0'),
(2, 2, 1, 2, 'Vigila por donde pisas', '0'),
(3, 5, 1, 3, 'Nivel 1', '{\r\n    \"phaser\": {\r\n        \"width\": 5,\r\n        \"height\": 4,\r\n        \"theme\": \"default\",\r\n        \"layers\" : {\r\n            \"background\" : {\r\n                \"spriteSheet\": \"background\",\r\n                \"spriteSheetType\": \"multi\",\r\n                \"objects\": [\r\n                    {\r\n                        \"x\": 0,\r\n                        \"y\": 0,\r\n                        \"spriteIndex\": \"0\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 1,\r\n                        \"y\": 0,\r\n                        \"spriteIndex\": \"1\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 2,\r\n                        \"y\": 0,\r\n                        \"spriteIndex\": \"2\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 3,\r\n                        \"y\": 0,\r\n                        \"spriteIndex\": \"3\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 4,\r\n                        \"y\": 0,\r\n                        \"spriteIndex\": \"4\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 0,\r\n                        \"y\": 1,\r\n                        \"spriteIndex\": \"5\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 1,\r\n                        \"y\": 1,\r\n                        \"spriteIndex\": \"6\"\r\n                    },\r\n                    {\r\n                        \"x\": 2,\r\n                        \"y\": 1,\r\n                        \"spriteIndex\": \"7\"\r\n                    },\r\n                    {\r\n                        \"x\": 3,\r\n                        \"y\": 1,\r\n                        \"spriteIndex\": \"8\"\r\n                    },\r\n                    {\r\n                        \"x\": 4,\r\n                        \"y\": 1,\r\n                        \"spriteIndex\": \"9\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 0,\r\n                        \"y\": 2,\r\n                        \"spriteIndex\": \"15\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 1,\r\n                        \"y\": 2,\r\n                        \"spriteIndex\": \"16\"\r\n                    },\r\n                    {\r\n                        \"x\": 2,\r\n                        \"y\": 2,\r\n                        \"spriteIndex\": \"17\"\r\n                    },\r\n                    {\r\n                        \"x\": 3,\r\n                        \"y\": 2,\r\n                        \"spriteIndex\": \"18\"\r\n                    },\r\n                    {\r\n                        \"x\": 4,\r\n                        \"y\": 2,\r\n                        \"spriteIndex\": \"19\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 0,\r\n                        \"y\": 3,\r\n                        \"spriteIndex\": \"20\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 1,\r\n                        \"y\": 3,\r\n                        \"spriteIndex\": \"21\"\r\n                    },\r\n                    {\r\n                        \"x\": 2,\r\n                        \"y\": 3,\r\n                        \"spriteIndex\": \"22\"\r\n                    },\r\n                    {\r\n                        \"x\": 3,\r\n                        \"y\": 3,\r\n                        \"spriteIndex\": \"23\"\r\n                    },\r\n                    {\r\n                        \"x\": 4,\r\n                        \"y\": 3,\r\n                        \"spriteIndex\": \"24\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    }\r\n                ],\r\n                \"depth\": 0\r\n            },\r\n            \"players\" : {\r\n                \"spriteSheet\": \"player\",\r\n                \"spriteSheetType\": \"multi\",\r\n                \"objects\": [\r\n                    {\r\n                        \"x\": 1,\r\n                        \"y\": 2\r\n                    }\r\n                ],\r\n                \"depth\": 2\r\n            },\r\n            \"objects\" : [\r\n                {\r\n                    \"spriteSheet\": \"chest\",\r\n                    \"spriteSheetType\": \"img\",\r\n                    \"objects\": [\r\n                        {\r\n                            \"x\": 3,\r\n                            \"y\": 1,\r\n                            \"type\": \"chest\"\r\n                        }\r\n                    ],\r\n                    \"depth\": 1\r\n                }\r\n            ]\r\n        }\r\n    },\r\n    \"blockly\": {\r\n        \"toolbox\": {\r\n            \"kind\": \"categoryToolbox\",\r\n            \"contents\": [\r\n                {\r\n                    \"kind\": \"category\",\r\n                    \"name\": \"Actions\",\r\n                    \"colour\": \"#a5a55b\",\r\n                    \"contents\": [\r\n                        {\r\n                            \"type\": \"movement\",\r\n                            \"kind\": \"block\"\r\n                        },\r\n                        {\r\n                            \"type\": \"rotate\",\r\n                            \"kind\": \"block\"\r\n                        },\r\n                        {\r\n                            \"type\": \"changeStatus\",\r\n                            \"kind\": \"block\"\r\n                        }\r\n                    ]\r\n                },\r\n                {\r\n                    \"kind\": \"category\",\r\n                    \"name\": \"Text\",\r\n                    \"colour\": \"#e13030\",\r\n                    \"contents\": [\r\n                        {\r\n                            \"type\": \"text\",\r\n                            \"kind\": \"block\"\r\n                        }\r\n                    ]\r\n                },\r\n                {\r\n                    \"kind\": \"category\",\r\n                    \"name\": \"Numbers\",\r\n                    \"colour\": \"#0d44ba\",\r\n                    \"contents\": [\r\n                        {\r\n                            \"type\": \"numberSpecial\",\r\n                            \"kind\": \"block\"\r\n                        }\r\n                    ]\r\n                },\r\n                {\r\n                    \"kind\": \"category\",\r\n                    \"name\": \"Loops\",\r\n                    \"colour\": \"#36e82a\",\r\n                    \"contents\": [\r\n                        {\r\n                            \"type\": \"for_X_times\",\r\n                            \"kind\": \"block\"\r\n                        },\r\n                        {\r\n                            \"type\": \"while_do\",\r\n                            \"kind\": \"block\"\r\n                        }\r\n                    ]\r\n                },\r\n                {\r\n                    \"kind\": \"category\",\r\n                    \"name\": \"Conditions\",\r\n                    \"colour\": \"#0b6b0c\",\r\n                    \"contents\": [\r\n                        {\r\n                            \"type\": \"if_do\",\r\n                            \"kind\": \"block\"\r\n                        },\r\n                        {\r\n                            \"type\": \"if_else_do\",\r\n                            \"kind\": \"block\"\r\n                        },\r\n                        {\r\n                            \"type\": \"and_or\",\r\n                            \"kind\": \"block\"\r\n                        },\r\n                        {\r\n                            \"type\": \"comparator\",\r\n                            \"kind\": \"block\"\r\n                        }\r\n                    ]\r\n                }\r\n            ]\r\n        },\r\n        \"workspaceBlocks\": [\r\n            \"movement\",\r\n            \"numberSpecial\"\r\n        ]\r\n    }\r\n}'),
(4, 5, 1, 4, 'Nivel 2', '{\r\n    \"phaser\": {\r\n        \"width\": 6,\r\n        \"height\": 5,\r\n        \"theme\": \"default\",\r\n        \"layers\" : {\r\n            \"background\" : {\r\n                \"spriteSheet\": \"background\",\r\n                \"spriteSheetType\": \"multi\",\r\n                \"objects\": [\r\n                    {\r\n                        \"x\": 0,\r\n                        \"y\": 0,\r\n                        \"spriteIndex\": \"0\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 1,\r\n                        \"y\": 0,\r\n                        \"spriteIndex\": \"1\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 2,\r\n                        \"y\": 0,\r\n                        \"spriteIndex\": \"2\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 3,\r\n                        \"y\": 0,\r\n                        \"spriteIndex\": \"2\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 4,\r\n                        \"y\": 0,\r\n                        \"spriteIndex\": \"3\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 5,\r\n                        \"y\": 0,\r\n                        \"spriteIndex\": \"4\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 0,\r\n                        \"y\": 1,\r\n                        \"spriteIndex\": \"5\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 1,\r\n                        \"y\": 1,\r\n                        \"spriteIndex\": \"6\"\r\n                    },\r\n                    {\r\n                        \"x\": 2,\r\n                        \"y\": 1,\r\n                        \"spriteIndex\": \"7\"\r\n                    },\r\n                    {\r\n                        \"x\": 3,\r\n                        \"y\": 1,\r\n                        \"spriteIndex\": \"7\"\r\n                    },\r\n                    {\r\n                        \"x\": 4,\r\n                        \"y\": 1,\r\n                        \"spriteIndex\": \"8\"\r\n                    },\r\n                    {\r\n                        \"x\": 5,\r\n                        \"y\": 1,\r\n                        \"spriteIndex\": \"9\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 0,\r\n                        \"y\": 2,\r\n                        \"spriteIndex\": \"10\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 1,\r\n                        \"y\": 2,\r\n                        \"spriteIndex\": \"11\"\r\n                    },\r\n                    {\r\n                        \"x\": 2,\r\n                        \"y\": 2,\r\n                        \"spriteIndex\": \"12\"\r\n                    },\r\n                    {\r\n                        \"x\": 3,\r\n                        \"y\": 2,\r\n                        \"spriteIndex\": \"12\"\r\n                    },\r\n                    {\r\n                        \"x\": 4,\r\n                        \"y\": 2,\r\n                        \"spriteIndex\": \"13\"\r\n                    },\r\n                    {\r\n                        \"x\": 5,\r\n                        \"y\": 2,\r\n                        \"spriteIndex\": \"14\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 0,\r\n                        \"y\": 3,\r\n                        \"spriteIndex\": \"15\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 1,\r\n                        \"y\": 3,\r\n                        \"spriteIndex\": \"16\"\r\n                    },\r\n                    {\r\n                        \"x\": 2,\r\n                        \"y\": 3,\r\n                        \"spriteIndex\": \"17\"\r\n                    },\r\n                    {\r\n                        \"x\": 3,\r\n                        \"y\": 3,\r\n                        \"spriteIndex\": \"17\"\r\n                    },\r\n                    {\r\n                        \"x\": 4,\r\n                        \"y\": 3,\r\n                        \"spriteIndex\": \"18\"\r\n                    },\r\n                    {\r\n                        \"x\": 5,\r\n                        \"y\": 3,\r\n                        \"spriteIndex\": \"19\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 0,\r\n                        \"y\": 4,\r\n                        \"spriteIndex\": \"20\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 1,\r\n                        \"y\": 4,\r\n                        \"spriteIndex\": \"21\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 2,\r\n                        \"y\": 4,\r\n                        \"spriteIndex\": \"22\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 3,\r\n                        \"y\": 4,\r\n                        \"spriteIndex\": \"22\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 4,\r\n                        \"y\": 4,\r\n                        \"spriteIndex\": \"23\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 5,\r\n                        \"y\": 4,\r\n                        \"spriteIndex\": \"24\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    }\r\n                ],\r\n                \"depth\": 0\r\n            },\r\n            \"players\" : {\r\n                \"spriteSheet\": \"player\",\r\n                \"spriteSheetType\": \"multi\",\r\n                \"objects\": [\r\n                    {\r\n                        \"x\": 1,\r\n                        \"y\": 3\r\n                    }\r\n                ],\r\n                \"depth\": 2\r\n            },\r\n            \"objects\" : [\r\n                {\r\n                    \"spriteSheet\": \"chest\",\r\n                    \"spriteSheetType\": \"img\",\r\n                    \"objects\": [\r\n                        {\r\n                            \"x\": 4,\r\n                            \"y\": 1  ,\r\n                            \"type\": \"chest\"\r\n                        }\r\n                    ],\r\n                    \"depth\": 1\r\n                },\r\n                {\r\n                    \"spriteSheet\": \"wall\",\r\n                    \"spriteSheetType\": \"img\",\r\n                    \"objects\": [\r\n                        {\r\n                            \"x\": 1,\r\n                            \"y\": 1 \r\n                        },\r\n                        {\r\n                            \"x\": 1,\r\n                            \"y\": 2 \r\n                        },\r\n                        {\r\n                            \"x\": 4,\r\n                            \"y\": 3\r\n                        }\r\n                    ],\r\n                    \"depth\": 1\r\n                }\r\n            ]\r\n        }\r\n    },\r\n    \"blockly\": {\r\n        \"toolbox\": {\r\n            \"kind\": \"categoryToolbox\",\r\n            \"contents\": [\r\n                {\r\n                    \"kind\": \"category\",\r\n                    \"name\": \"Actions\",\r\n                    \"colour\": \"#a5a55b\",\r\n                    \"contents\": [\r\n                        {\r\n                            \"type\": \"movement\",\r\n                            \"kind\": \"block\"\r\n                        },\r\n                        {\r\n                            \"type\": \"rotate\",\r\n                            \"kind\": \"block\"\r\n                        },\r\n                        {\r\n                            \"type\": \"changeStatus\",\r\n                            \"kind\": \"block\"\r\n                        }\r\n                    ]\r\n                },\r\n                {\r\n                    \"kind\": \"category\",\r\n                    \"name\": \"Text\",\r\n                    \"colour\": \"#e13030\",\r\n                    \"contents\": [\r\n                        {\r\n                            \"type\": \"text\",\r\n                            \"kind\": \"block\"\r\n                        }\r\n                    ]\r\n                },\r\n                {\r\n                    \"kind\": \"category\",\r\n                    \"name\": \"Numbers\",\r\n                    \"colour\": \"#0d44ba\",\r\n                    \"contents\": [\r\n                        {\r\n                            \"type\": \"numberSpecial\",\r\n                            \"kind\": \"block\"\r\n                        }\r\n                    ]\r\n                },\r\n                {\r\n                    \"kind\": \"category\",\r\n                    \"name\": \"Loops\",\r\n                    \"colour\": \"#36e82a\",\r\n                    \"contents\": [\r\n                        {\r\n                            \"type\": \"for_X_times\",\r\n                            \"kind\": \"block\"\r\n                        },\r\n                        {\r\n                            \"type\": \"while_do\",\r\n                            \"kind\": \"block\"\r\n                        }\r\n                    ]\r\n                },\r\n                {\r\n                    \"kind\": \"category\",\r\n                    \"name\": \"Conditions\",\r\n                    \"colour\": \"#0b6b0c\",\r\n                    \"contents\": [\r\n                        {\r\n                            \"type\": \"if_do\",\r\n                            \"kind\": \"block\"\r\n                        },\r\n                        {\r\n                            \"type\": \"if_else_do\",\r\n                            \"kind\": \"block\"\r\n                        },\r\n                        {\r\n                            \"type\": \"and_or\",\r\n                            \"kind\": \"block\"\r\n                        },\r\n                        {\r\n                            \"type\": \"comparator\",\r\n                            \"kind\": \"block\"\r\n                        }\r\n                    ]\r\n                }\r\n            ]\r\n        },\r\n        \"workspaceBlocks\": [\r\n            \"movement\",\r\n            \"numberSpecial\"\r\n        ]\r\n    }\r\n}'),
(5, 5, 1, 5, 'Nivel 5', '{\r\n    \"phaser\": {\r\n        \"width\": 6,\r\n        \"height\": 6,\r\n        \"theme\": \"default\",\r\n        \"layers\" : {\r\n            \"background\" : {\r\n                \"spriteSheet\": \"background\",\r\n                \"spriteSheetType\": \"multi\",\r\n                \"objects\": [\r\n                    {\r\n                        \"x\": 0,\r\n                        \"y\": 0,\r\n                        \"spriteIndex\": \"0\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 1,\r\n                        \"y\": 0,\r\n                        \"spriteIndex\": \"1\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 2,\r\n                        \"y\": 0,\r\n                        \"spriteIndex\": \"2\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 0,\r\n                        \"y\": 1,\r\n                        \"spriteIndex\": \"5\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 1,\r\n                        \"y\": 1,\r\n                        \"spriteIndex\": \"6\"\r\n                    },\r\n                    {\r\n                        \"x\": 2,\r\n                        \"y\": 1,\r\n                        \"spriteIndex\": \"7\"\r\n                    },\r\n                    {\r\n                        \"x\": 0,\r\n                        \"y\": 2,\r\n                        \"spriteIndex\": \"10\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 1,\r\n                        \"y\": 2,\r\n                        \"spriteIndex\": \"11\"\r\n                    },\r\n                    {\r\n                        \"x\": 2,\r\n                        \"y\": 2,\r\n                        \"spriteIndex\": \"12\"\r\n                    },\r\n                    {\r\n                        \"x\": 3,\r\n                        \"y\": 2,\r\n                        \"spriteIndex\": \"12\"\r\n                    },\r\n                    {\r\n                        \"x\": 0,\r\n                        \"y\": 3,\r\n                        \"spriteIndex\": \"10\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 1,\r\n                        \"y\": 3,\r\n                        \"spriteIndex\": \"11\"\r\n                    },\r\n                    {\r\n                        \"x\": 2,\r\n                        \"y\": 3,\r\n                        \"spriteIndex\": \"12\"\r\n                    },\r\n                    {\r\n                        \"x\": 3,\r\n                        \"y\": 3,\r\n                        \"spriteIndex\": \"12\"\r\n                    },\r\n                    {\r\n                        \"x\": 4,\r\n                        \"y\": 3,\r\n                        \"spriteIndex\": \"13\"\r\n                    },\r\n                    {\r\n                        \"x\": 5,\r\n                        \"y\": 3,\r\n                        \"spriteIndex\": \"14\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 0,\r\n                        \"y\": 4,\r\n                        \"spriteIndex\": \"15\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 1,\r\n                        \"y\": 4,\r\n                        \"spriteIndex\": \"16\"\r\n                    },\r\n                    {\r\n                        \"x\": 2,\r\n                        \"y\": 4,\r\n                        \"spriteIndex\": \"17\"\r\n                    },\r\n                    {\r\n                        \"x\": 3,\r\n                        \"y\": 4,\r\n                        \"spriteIndex\": \"17\"\r\n                    },\r\n                    {\r\n                        \"x\": 4,\r\n                        \"y\": 4,\r\n                        \"spriteIndex\": \"18\"\r\n                    },\r\n                    {\r\n                        \"x\": 5,\r\n                        \"y\": 4,\r\n                        \"spriteIndex\": \"19\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 0,\r\n                        \"y\": 5,\r\n                        \"spriteIndex\": \"20\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 1,\r\n                        \"y\": 5,\r\n                        \"spriteIndex\": \"21\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 2,\r\n                        \"y\": 5,\r\n                        \"spriteIndex\": \"22\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 3,\r\n                        \"y\": 5,\r\n                        \"spriteIndex\": \"22\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 4,\r\n                        \"y\": 5,\r\n                        \"spriteIndex\": \"23\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 5,\r\n                        \"y\": 5,\r\n                        \"spriteIndex\": \"24\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    }\r\n                ],\r\n                \"depth\": 0\r\n            },\r\n            \"players\" : {\r\n                \"spriteSheet\": \"player\",\r\n                \"spriteSheetType\": \"multi\",\r\n                \"objects\": [\r\n                    {\r\n                        \"x\": 1,\r\n                        \"y\": 1\r\n                    }\r\n                ],\r\n                \"depth\": 2\r\n            },\r\n            \"objects\" : [\r\n                {\r\n                    \"spriteSheet\": \"chest\",\r\n                    \"spriteSheetType\": \"img\",\r\n                    \"objects\": [\r\n                        {\r\n                            \"x\": 4,\r\n                            \"y\": 4,\r\n                            \"type\": \"chest\"\r\n                        }\r\n                    ],\r\n                    \"depth\": 1\r\n                },\r\n                {\r\n                    \"spriteSheet\": \"wall\",\r\n                    \"spriteSheetType\": \"img\",\r\n                    \"objects\": [\r\n                        {\r\n                            \"x\": 2,\r\n                            \"y\": 1\r\n                        },\r\n                        {\r\n                            \"x\": 2,\r\n                            \"y\": 2\r\n                        },\r\n                        {\r\n                            \"x\": 3,\r\n                            \"y\": 2\r\n                        },\r\n                        {\r\n                            \"x\": 2,\r\n                            \"y\": 3\r\n                        },\r\n                        {\r\n                            \"x\": 3,\r\n                            \"y\": 3\r\n                        },\r\n                        {\r\n                            \"x\": 4,\r\n                            \"y\": 3\r\n                        }\r\n                    ],\r\n                    \"depth\": 1\r\n                }\r\n            ]\r\n        }\r\n    },\r\n    \"blockly\": {\r\n        \"toolbox\": {\r\n            \"kind\": \"categoryToolbox\",\r\n            \"contents\": [\r\n                {\r\n                    \"kind\": \"category\",\r\n                    \"name\": \"Actions\",\r\n                    \"colour\": \"#a5a55b\",\r\n                    \"contents\": [\r\n                        {\r\n                            \"type\": \"movement\",\r\n                            \"kind\": \"block\"\r\n                        },\r\n                        {\r\n                            \"type\": \"rotate\",\r\n                            \"kind\": \"block\"\r\n                        },\r\n                        {\r\n                            \"type\": \"changeStatus\",\r\n                            \"kind\": \"block\"\r\n                        }\r\n                    ]\r\n                },\r\n                {\r\n                    \"kind\": \"category\",\r\n                    \"name\": \"Text\",\r\n                    \"colour\": \"#e13030\",\r\n                    \"contents\": [\r\n                        {\r\n                            \"type\": \"text\",\r\n                            \"kind\": \"block\"\r\n                        }\r\n                    ]\r\n                },\r\n                {\r\n                    \"kind\": \"category\",\r\n                    \"name\": \"Numbers\",\r\n                    \"colour\": \"#0d44ba\",\r\n                    \"contents\": [\r\n                        {\r\n                            \"type\": \"numberSpecial\",\r\n                            \"kind\": \"block\"\r\n                        }\r\n                    ]\r\n                },\r\n                {\r\n                    \"kind\": \"category\",\r\n                    \"name\": \"Loops\",\r\n                    \"colour\": \"#36e82a\",\r\n                    \"contents\": [\r\n                        {\r\n                            \"type\": \"for_X_times\",\r\n                            \"kind\": \"block\"\r\n                        },\r\n                        {\r\n                            \"type\": \"while_do\",\r\n                            \"kind\": \"block\"\r\n                        }\r\n                    ]\r\n                },\r\n                {\r\n                    \"kind\": \"category\",\r\n                    \"name\": \"Conditions\",\r\n                    \"colour\": \"#0b6b0c\",\r\n                    \"contents\": [\r\n                        {\r\n                            \"type\": \"if_do\",\r\n                            \"kind\": \"block\"\r\n                        },\r\n                        {\r\n                            \"type\": \"if_else_do\",\r\n                            \"kind\": \"block\"\r\n                        },\r\n                        {\r\n                            \"type\": \"and_or\",\r\n                            \"kind\": \"block\"\r\n                        },\r\n                        {\r\n                            \"type\": \"comparator\",\r\n                            \"kind\": \"block\"\r\n                        }\r\n                    ]\r\n                }\r\n            ]\r\n        },\r\n        \"workspaceBlocks\": [\r\n            \"movement\",\r\n            \"numberSpecial\"\r\n        ]\r\n    }\r\n}'),
(10, 4, 1, 10, 'Nivel Padre', 'nada'),
(11, 2, 2, 10, 'Prueba Thunder', '{\r\n    \"phaser\": {\r\n        \"width\": 5,\r\n        \"height\": 4,\r\n        \"theme\": \"default\",\r\n        \"layers\" : {\r\n            \"background\" : {\r\n                \"spriteSheet\": \"background\",\r\n                \"spriteSheetType\": \"multi\",\r\n                \"objects\": [\r\n                    {\r\n                        \"x\": 0,\r\n                        \"y\": 0,\r\n                        \"spriteIndex\": \"0\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 1,\r\n                        \"y\": 0,\r\n                        \"spriteIndex\": \"1\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 2,\r\n                        \"y\": 0,\r\n                        \"spriteIndex\": \"2\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 3,\r\n                        \"y\": 0,\r\n                        \"spriteIndex\": \"3\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 4,\r\n                        \"y\": 0,\r\n                        \"spriteIndex\": \"4\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 0,\r\n                        \"y\": 1,\r\n                        \"spriteIndex\": \"5\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 1,\r\n                        \"y\": 1,\r\n                        \"spriteIndex\": \"6\"\r\n                    },\r\n                    {\r\n                        \"x\": 2,\r\n                        \"y\": 1,\r\n                        \"spriteIndex\": \"7\"\r\n                    },\r\n                    {\r\n                        \"x\": 3,\r\n                        \"y\": 1,\r\n                        \"spriteIndex\": \"8\"\r\n                    },\r\n                    {\r\n                        \"x\": 4,\r\n                        \"y\": 1,\r\n                        \"spriteIndex\": \"9\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 0,\r\n                        \"y\": 2,\r\n                        \"spriteIndex\": \"15\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 1,\r\n                        \"y\": 2,\r\n                        \"spriteIndex\": \"16\"\r\n                    },\r\n                    {\r\n                        \"x\": 2,\r\n                        \"y\": 2,\r\n                        \"spriteIndex\": \"17\"\r\n                    },\r\n                    {\r\n                        \"x\": 3,\r\n                        \"y\": 2,\r\n                        \"spriteIndex\": \"18\"\r\n                    },\r\n                    {\r\n                        \"x\": 4,\r\n                        \"y\": 2,\r\n                        \"spriteIndex\": \"19\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 0,\r\n                        \"y\": 3,\r\n                        \"spriteIndex\": \"20\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    },\r\n                    {\r\n                        \"x\": 1,\r\n                        \"y\": 3,\r\n                        \"spriteIndex\": \"21\"\r\n                    },\r\n                    {\r\n                        \"x\": 2,\r\n                        \"y\": 3,\r\n                        \"spriteIndex\": \"22\"\r\n                    },\r\n                    {\r\n                        \"x\": 3,\r\n                        \"y\": 3,\r\n                        \"spriteIndex\": \"23\"\r\n                    },\r\n                    {\r\n                        \"x\": 4,\r\n                        \"y\": 3,\r\n                        \"spriteIndex\": \"24\",\r\n                        \"properties\": {\r\n                            \"collides\": true\r\n                        }\r\n                    }\r\n                ],\r\n                \"depth\": 0\r\n            },\r\n            \"players\" : {\r\n                \"spriteSheet\": \"player\",\r\n                \"spriteSheetType\": \"multi\",\r\n                \"objects\": [\r\n                    {\r\n                        \"x\": 1,\r\n                        \"y\": 2\r\n                    }\r\n                ],\r\n                \"depth\": 2\r\n            },\r\n            \"objects\" : [\r\n                {\r\n                    \"spriteSheet\": \"chest\",\r\n                    \"spriteSheetType\": \"img\",\r\n                    \"objects\": [\r\n                        {\r\n                            \"x\": 3,\r\n                            \"y\": 1,\r\n                            \"type\": \"chest\"\r\n                        }\r\n                    ],\r\n                    \"depth\": 1\r\n                }\r\n            ]\r\n        }\r\n    },\r\n    \"blockly\": {\r\n        \"toolbox\": {\r\n            \"kind\": \"categoryToolbox\",\r\n            \"contents\": [\r\n                {\r\n                    \"kind\": \"category\",\r\n                    \"name\": \"Actions\",\r\n                    \"colour\": \"#a5a55b\",\r\n                    \"contents\": [\r\n                        {\r\n                            \"type\": \"movement\",\r\n                            \"kind\": \"block\"\r\n                        },\r\n                        {\r\n                            \"type\": \"rotate\",\r\n                            \"kind\": \"block\"\r\n                        },\r\n                        {\r\n                            \"type\": \"changeStatus\",\r\n                            \"kind\": \"block\"\r\n                        }\r\n                    ]\r\n                },\r\n                {\r\n                    \"kind\": \"category\",\r\n                    \"name\": \"Text\",\r\n                    \"colour\": \"#e13030\",\r\n                    \"contents\": [\r\n                        {\r\n                            \"type\": \"text\",\r\n                            \"kind\": \"block\"\r\n                        }\r\n                    ]\r\n                },\r\n                {\r\n                    \"kind\": \"category\",\r\n                    \"name\": \"Numbers\",\r\n                    \"colour\": \"#0d44ba\",\r\n                    \"contents\": [\r\n                        {\r\n                            \"type\": \"numberSpecial\",\r\n                            \"kind\": \"block\"\r\n                        }\r\n                    ]\r\n                },\r\n                {\r\n                    \"kind\": \"category\",\r\n                    \"name\": \"Loops\",\r\n                    \"colour\": \"#36e82a\",\r\n                    \"contents\": [\r\n                        {\r\n                            \"type\": \"for_X_times\",\r\n                            \"kind\": \"block\"\r\n                        },\r\n                        {\r\n                            \"type\": \"while_do\",\r\n                            \"kind\": \"block\"\r\n                        }\r\n                    ]\r\n                },\r\n                {\r\n                    \"kind\": \"category\",\r\n                    \"name\": \"Conditions\",\r\n                    \"colour\": \"#0b6b0c\",\r\n                    \"contents\": [\r\n                        {\r\n                            \"type\": \"if_do\",\r\n                            \"kind\": \"block\"\r\n                        },\r\n                        {\r\n                            \"type\": \"if_else_do\",\r\n                            \"kind\": \"block\"\r\n                        },\r\n                        {\r\n                            \"type\": \"and_or\",\r\n                            \"kind\": \"block\"\r\n                        },\r\n                        {\r\n                            \"type\": \"comparator\",\r\n                            \"kind\": \"block\"\r\n                        }\r\n                    ]\r\n                }\r\n            ]\r\n        },\r\n        \"workspaceBlocks\": [\r\n            \"movement\",\r\n            \"numberSpecial\"\r\n        ]\r\n    }');




-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `play`
--

CREATE TABLE `play` (
  `user` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  `stars` int(11) NOT NULL,
  `attempts` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `set`
--

CREATE TABLE `set` (
  `group` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `role` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `set`
--

INSERT INTO `set` (`group`, `user`, `role`) VALUES
(15, 3, 'Miembro'),
(15, 4, 'Anfitrión'),
(16, 4, 'Anfitrión'),
(17, 3, 'Anfitrión');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  `role` varchar(25) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `name`, `role`, `password`) VALUES
(1, 'Diego', 'Estudiante', '1234'),
(2, 'Samuel', 'Admin', '12345'),
(3, 'abcd', 'Estudiante', '$2b$11$nB8ZtM/0MGOwISU4fmbpJu/pmT7QhZqak5ZTo3tlwyvDI4kHAlLye'),
(4, 'prueba', 'Estudiante', '$2b$11$HBfvRL4YVYSD5KdtWAmKQOq0SQQn2TC/GEQNoN0iaWwvsGESY1Ejm'),
(5, 'CodeHop', 'Admin', '$2b$11$o5RezMu.bSkDldrmyyvV6ew8N7khRHu4UZDJj3zwHl1xF2HAU01Pi');

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
  ADD KEY `category` (`category`),
  ADD KEY `self` (`self`);

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
  ADD PRIMARY KEY (`group`,`user`),
  ADD KEY `user` (`user`),
  ADD KEY `group` (`group`) USING BTREE;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `level`
--
ALTER TABLE `level`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
  ADD CONSTRAINT `level_ibfk_2` FOREIGN KEY (`category`) REFERENCES `category` (`id`),
  ADD CONSTRAINT `level_ibfk_3` FOREIGN KEY (`self`) REFERENCES `level` (`id`);

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
