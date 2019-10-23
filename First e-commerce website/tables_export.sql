-- phpMyAdmin SQL Dump
-- version 4.0.10.10
-- http://www.phpmyadmin.net
--
-- Host: csmysql.cs.cf.ac.uk
-- Generation Time: Apr 02, 2017 at 01:43 AM
-- Server version: 5.1.73
-- PHP Version: 5.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `c1652079`
--

-- --------------------------------------------------------

--
-- Table structure for table `pc_games_list`
--

CREATE TABLE IF NOT EXISTS `pc_games_list` (
  `ID` varchar(30) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `price` int(30) NOT NULL,
  `image` varchar(1000) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pc_games_list`
--

INSERT INTO `pc_games_list` (`ID`, `name`, `description`, `price`, `image`) VALUES
('MEA_2017', 'Mass Effect Andromeda 2017', 'Mass Effect: Andromeda is an upcoming action role-playing video game developed by BioWare and published by Electronic Arts.\n<br><br>\n- Become the Pathfinder and discover an uncharted galaxy in Mass Effect: Andromeda\n<br>\n- By Electronic Arts', 50, 'Mass_Effect_Andromeda_2017.jpeg'),
('O_2016', 'Overwatch 2016', 'Overwatch is a team-based multiplayer first-person shooter video game developed and published by Blizzard Entertainment. The best game you''ll ever play in your life.', 50, 'Overwatch_2016.jpg'),
('RE7B_2017', 'Resident Evil Biohazard 2017', 'Resident Evil 7: Biohazard is a survival horror video game developed and published by Capcom in which you survive by killing ZOMBIES !', 60, 'Resident_Evil_7_Biohazard_2017.jpg'),
('WOW_2004', 'World Of Warcraft 2004', 'World of Warcraft (WoW) is a massively multiplayer online role-playing game (MMORPG) released in 2004 by Blizzard Entertainment', 20, 'World_Of_Warcraft_2004.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE IF NOT EXISTS `reviews` (
  `id` varchar(1000) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `name` varchar(1000) NOT NULL,
  `review` varchar(1000) NOT NULL,
  PRIMARY KEY (`review`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `image`, `name`, `review`) VALUES
('WOW_2004', 'user.png', 'Kuber Kalra', 'Loved ittt!!!'),
('WOW_2004', 'user.png', 'Random Guy', 'An Awesome Game indeed. I find myself playing it all day. Love it so much. Highly recommend for all of you to buy.'),
('MEA_2017', 'user.png', 'Kuber Kalra', 'Im in so love with this game. Couldnt resist playing. The graphics and action are intense. A worth for your money.'),
('O_2016', 'user.png', 'Ishita Satija', 'I tried this game because my friend told me about it and since then Im in so love with this game. Its so addictive.'),
('RE7B_2017', 'user.png', 'Abcd 1234', 'Didnt like it'),
('RE7B_2017', 'user.png', 'Ishita', 'Its really scaryyyy. But a must try. The storyline is very good.');

-- --------------------------------------------------------

--
-- Table structure for table `user_accounts`
--

CREATE TABLE IF NOT EXISTS `user_accounts` (
  `username` varchar(40) NOT NULL,
  `first_name` varchar(40) NOT NULL,
  `last_name` varchar(40) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_accounts`
--

INSERT INTO `user_accounts` (`username`, `first_name`, `last_name`, `email`, `password`) VALUES
('kuber_kalra', 'Kuber', 'Kalra', 'kuber_kalra@ymail.com', 'abcd1234'),
('ishita_satija', 'Ishita', 'Satija', 'ishitaaries04@gmail.com', 'abcd12345'),
('random_guy', 'Random', 'Guy', 'randomguy@gmail.com', 'abcd123456');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
