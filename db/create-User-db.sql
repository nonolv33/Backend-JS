DROP TABLE IF EXISTS `User`;

CREATE TABLE IF NOT EXISTS `User`
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(25) UNIQUE NOT NULL,
    password CHAR(60) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    role ENUM('Admin', 'SuperUser') DEFAULT 'SuperUser',
    age INT DEFAULT 0
);

