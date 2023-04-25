/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: articles
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `articles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `author_email` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 33 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: user
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 19 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: articles
# ------------------------------------------------------------

INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    1,
    'leo@ee.com',
    'This is the first article from leo',
    '2023-04-19 14:50:07'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    2,
    'paul@ee.com',
    'Hello, how are you doing today?',
    '2023-04-19 16:00:44'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    3,
    'leo@ee.com',
    'Have you tried the new restaurant in town yet?',
    '2023-04-19 16:00:44'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    4,
    'amy@mail.com',
    'Just wanted to say thank you for your help.',
    '2023-04-19 16:00:44'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    5,
    'jack@mail.com',
    'I can\'t believe it\'s already April!',
    '2023-04-19 16:00:44'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    6,
    'join@yo.com',
    'Did you watch the game last night?',
    '2023-04-19 16:00:44'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    7,
    'paul@ee.com',
    'Hope you have a great day today!',
    '2023-04-19 16:00:44'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    8,
    'leo@ee.com',
    'I think I left my keys at your place, can you check?',
    '2023-04-19 16:00:44'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    9,
    'amy@mail.com',
    'I think I left my keys at your place, can you check?',
    '2023-04-19 16:00:44'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    10,
    'jack@mail.com',
    'Let\'s catch up soon over coffee.',
    '2023-04-19 16:00:44'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    11,
    'join@yo.com',
    'What do you feel like having for lunch?',
    '2023-04-19 16:00:44'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    12,
    'paul@ee.com',
    'Have you seen the latest movie that came out?',
    '2023-04-19 16:00:44'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    13,
    'leo@ee.com',
    'Happy birthday! Hope you have a wonderful day.',
    '2023-04-19 16:00:44'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    14,
    'amy@mail.com',
    'It\'s been a while since we last spoke, how have you been?',
    '2023-04-19 16:00:44'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    15,
    'jack@mail.com',
    'I can\'t wait for summer to arrive!',
    '2023-04-19 16:00:44'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    16,
    'paul@ee.com',
    'Want to grab a drink after work today?',
    '2023-04-19 16:07:28'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    17,
    'leo@ee.com',
    'Thank you for always being there for me.',
    '2023-04-19 16:07:28'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    18,
    'amy@mail.com',
    'I have a surprise for you, meet me at the park at 6 pm.',
    '2023-04-19 16:07:28'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    19,
    'jack@mail.com',
    'Did you hear about the new company that just launched?',
    '2023-04-19 16:07:28'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    20,
    'join@yo.com',
    'Let\'s plan a trip together soon.',
    '2023-04-19 16:07:28'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    21,
    'paul@ee.com',
    'Good luck on your exam today!',
    '2023-04-19 16:07:28'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    22,
    'leo@ee.com',
    'I miss you, we should hang out soon.',
    '2023-04-19 16:07:28'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    23,
    'amy@mail.com',
    'Have you tried the new ice cream place in the neighborhood?',
    '2023-04-19 16:07:28'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    24,
    'jack@mail.com',
    'I\'m thinking about trying a new hobby, any suggestions?',
    '2023-04-19 16:07:28'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    25,
    'join@yo.com',
    'Congratulations on your new job!',
    '2023-04-19 16:07:28'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    26,
    'paul@ee.com',
    'How was your weekend? Do anything fun?',
    '2023-04-19 16:08:15'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    27,
    'leo@ee.com',
    'Just a quick reminder that our meeting is at 3 pm today.',
    '2023-04-19 16:08:15'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    28,
    'amy@mail.com',
    'Can you believe it\'s already been a year since we met?',
    '2023-04-19 16:08:15'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    29,
    'jack@mail.com',
    'Let\'s go on a hike this weekend, are you free?',
    '2023-04-19 16:08:15'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    30,
    'jack@mail.com',
    'Thank you for always making me smile.',
    '2023-04-19 16:08:15'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    31,
    'join@yo.com',
    'I am so excited for the concert this weekend!',
    '2023-04-19 16:08:15'
  );
INSERT INTO
  `articles` (`id`, `author_email`, `content`, `create_time`)
VALUES
  (
    32,
    'paul@ee.com',
    'Have a great day and talk to you soon!',
    '2023-04-19 16:08:15'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: user
# ------------------------------------------------------------

INSERT INTO
  `user` (`id`, `username`, `email`, `password`)
VALUES
  (11, 'paul', 'paul@ee.com', 'paul123');
INSERT INTO
  `user` (`id`, `username`, `email`, `password`)
VALUES
  (15, 'Leo', 'leo@ee.com', 'leo123');
INSERT INTO
  `user` (`id`, `username`, `email`, `password`)
VALUES
  (16, 'amy', 'amy@mail.com', 'amycool');
INSERT INTO
  `user` (`id`, `username`, `email`, `password`)
VALUES
  (17, 'jack', 'jack@mail.com', 'jackcool');
INSERT INTO
  `user` (`id`, `username`, `email`, `password`)
VALUES
  (18, 'John', 'join@yo.com', 'john123');

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
