-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 11, 2021 at 08:27 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ajax_crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Go to Market', '2021-01-10 05:25:58', '2021-01-10 05:25:58'),
(2, 'Wake up time', '2021-01-10 05:35:12', '2021-01-10 05:35:12'),
(3, 'Go to Market', '2021-01-10 05:36:20', '2021-01-10 05:36:20'),
(4, 'Al Mamun', '2021-01-10 05:38:05', '2021-01-10 05:38:05'),
(5, 'Momin', '2021-01-10 06:34:50', '2021-01-10 06:34:50'),
(6, 'Al Mamun', '2021-01-10 06:43:51', '2021-01-10 06:43:51'),
(7, 'Al Mamun', '2021-01-10 06:44:14', '2021-01-10 06:44:14'),
(8, 'Al Mamun', '2021-01-10 06:45:49', '2021-01-10 06:45:49'),
(9, 'Al Mamun', '2021-01-10 20:02:42', '2021-01-10 20:02:42'),
(10, 'Mamun', '2021-01-10 20:03:42', '2021-01-10 20:03:42'),
(11, 'Momin', '2021-01-10 20:04:28', '2021-01-10 20:04:28'),
(12, 'Mamun', '2021-01-10 20:05:03', '2021-01-10 20:05:03'),
(13, 'Al Mamun', '2021-01-10 20:05:15', '2021-01-10 20:05:15'),
(14, 'Al Mamun', '2021-01-10 20:15:44', '2021-01-10 20:15:44'),
(15, 'Al Mamun', '2021-01-10 20:35:33', '2021-01-10 20:35:33'),
(16, 'Mobile', '2021-01-10 20:39:59', '2021-01-10 20:39:59'),
(17, 'Al Mamun', '2021-01-10 20:43:00', '2021-01-10 20:43:00'),
(21, 'Momin', '2021-01-10 20:49:00', '2021-01-10 20:49:00'),
(24, 'Final Exam', '2021-01-10 22:08:04', '2021-01-10 22:08:04'),
(25, 'Mid Exam', '2021-01-10 22:09:01', '2021-01-10 22:09:01'),
(26, 'Exam', '2021-01-10 22:12:35', '2021-01-10 22:12:35'),
(29, 'Al Mamun', '2021-01-10 22:30:44', '2021-01-10 22:30:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
