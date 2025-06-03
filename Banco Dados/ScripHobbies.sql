drop database if exists HobbiesDatabase;
create database HobbiesDatabase;
use HobbiesDatabase;

create table Cliente(
idCliente int auto_increment not null,
Nome varchar(45) not null,
Email varchar(45) not null,
Hobbie varchar(25) not null,
Senha varchar(25) not null,
primary key(idCliente)
) COMMENT 'TABELA DE CLIENTE';

create table ResultadoQuiz1(
idQuiz1 int not null auto_increment,
Pontuacao int not null,
fkCliente int not null,
primary key(idQuiz1),
foreign key(fkCliente) references Cliente(idCliente)
) COMMENT 'TABELA DOS RESULTADOS DO PRIMEIRO QUIZ';

create table ResultadoQuiz2(
idQuiz2 int not null auto_increment,
fkCliente int not null,
hobbie varchar(100) not null,
primary key(idQuiz2),
foreign key(fkCliente) references Cliente(idCliente)
) COMMENT 'TABELA DOS RESULTADOS DO SEGUNDO QUIZ';

insert into Cliente (Nome, Email, Hobbie, Senha)
values ('Bruno','bruno@sptech', 'Boxe', 'bruno');

-- Inserções para a tabela Cliente
insert into Cliente (Nome, Email, Hobbie, Senha) values 
('Ana','ana@gmail.com', 'Xadrez', 'ana123'),
('Carlos','carlos@hotmail.com', 'Musculação', 'car123'),
('Fernanda','fernanda@gmail.com', 'Séries/Filmes', 'fer456'),
('Lucas','lucas@outlook.com', 'Skate', 'luc789'),
('Juliana','juliana@sptech', 'Escalada', 'jul555'),
('Rafael','rafael@gmail.com', 'Malabarismo', 'raf000'),
('Mariana','mariana@outlook.com', 'Skate', 'mar111'),
('Paulo','paulo@gmail.com', 'Mágica', 'pau333'),
('Clara','clara@hotmail.com', 'Cubo Mágico', 'cla222'),
('Roberto','roberto@gmail.com', 'Boxe', 'rob999'),
('Tatiane','tatiane@sptech', 'Xadrez', 'tat234'),
('Vinicius','vinicius@gmail.com', 'Musculação', 'vin345'),
('Bianca','bianca@gmail.com', 'Skate', 'bia789'),
('Eduardo','eduardo@outlook.com', 'Skate', 'edu456'),
('Camila','camila@sptech', 'Escalada', 'cam147'),
('Diego','diego@gmail.com', 'Malabarismo', 'die852'),
('Larissa','larissa@hotmail.com', 'Beach Tennis', 'lar963'),
('João','joao@sptech', 'Mágica', 'joa159'),
('Isabela','isabela@gmail.com', 'Cubo Mágico', 'isa357');

-- Inserções para ResultadoQuiz1 (pontuação de 0 a 10 aleatória)
insert into ResultadoQuiz1 (Pontuacao, fkCliente) values 
(8, 1), (5, 2), (9, 3), (3, 4), (7, 5),
(10, 6), (2, 7), (4, 8), (6, 9), (1, 10),
(8, 11), (5, 12), (7, 13), (9, 14), (6, 15),
(10, 16), (3, 17), (2, 18), (4, 19), (7, 20);

-- Inserções para ResultadoQuiz2 (hobbie entre os 10 definidos)
insert into ResultadoQuiz2 (fkCliente, hobbie) values 
(1, 'Esportes e Atividades Físicas'),
(2, 'Desafios Mentais'),
(3, 'Esportes e Atividades Físicas'),
(4, 'Lazer e Descanso'),
(5, 'Esportes e Atividades Físicas'),
(6, 'Esportes e Atividades Físicas'),
(7, 'Artístico e Criativo'),
(8, 'Esportes e Atividades Físicas'),
(9, 'Artístico e Criativo'),
(10, 'Desafios Mentais'),
(11, 'Esportes e Atividades Físicas'),
(12, 'Desafios Mentais'),
(13, 'Esportes e Atividades Físicas'),
(14, 'Lazer e Descanso'),
(15, 'Esportes e Atividades Físicas'),
(16, 'Esportes e Atividades Físicas'),
(17, 'Artístico e Criativo'),
(18, 'Esportes e Atividades Físicas'),
(19, 'Artístico e Criativo'),
(20, 'Desafios Mentais');


select * from Cliente;
select * from ResultadoQuiz1;
select * from ResultadoQuiz2;





