CREATE TABLE IF NOT EXISTS `base`.`usuario` (                                  
    id int primary key AUTO_INCREMENT,
    carnet varchar(100) not null,
    name varchar(100) not null,
    lastname varchar(100) not null,
    email varchar(100) not null,
    password varchar(100) not null,
    status varchar(20) not null,
    role varchar(20) not null,
    UNIQUE (carnet)
)

insert into usuario (id, carnet, name, lastname, email, password, status, role) 
values ('202011518', 'Katherin', 'Chun', 'kath@gmail.com', '123456', 'true', 'admin')