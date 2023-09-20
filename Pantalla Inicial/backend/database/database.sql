CREATE DATABASE nechbd;

USE nechbd;
    
CREATE TABLE usuario(
    carnet INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(45) NOT NULL,
    apellido VARCHAR(45) NOT NULL,  
    correo VARCHAR(45) NOT NULL,
    password VARCHAR(45) NOT NULL
);

DESCRIBE usuario;