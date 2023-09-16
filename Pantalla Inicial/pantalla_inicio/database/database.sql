CREATE TABLE IF NOT EXISTS `base`.`usuario` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    carnet VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    status VARCHAR(20) NOT NULL,
    role VARCHAR(20) NOT NULL,
    UNIQUE (carnet)
);


INSERT INTO usuario (carnet, name, lastname, email, password, status, role) 
VALUES ('202011518', 'Katherin', 'Chun', 'kath@gmail.com', '123456', 'active', 'admin');
