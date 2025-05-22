-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

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

create table Hobbies(
idHobbie int not null,
Nome varchar(45) not null,
TempoMedio int not null,
Lugar varchar(10) not null,
primary key(idHobbie),
constraint chk_lugar check(Lugar in('Indoor','Outdoor','Both')),
constraint chk_tempo check(TempoMedio > 0)
) COMMENT 'TABELA DOS HOBBIES';

create table ResultadoQuiz1(
idQuiz1 int not null,
Pontuacao int not null,
fkCliente int not null,
Tentativa int,
primary key(idQuiz1),
foreign key(fkCliente) references Cliente(idCliente)
) COMMENT 'TABELA DOS RESULTADOS DO PRIMEIRO QUIZ';

create table ResultadoQuiz2(
idQuiz2 int not null,
fkCliente int not null,
fkHobbie int not null,
primary key(idQuiz2),
foreign key(fkCliente) references Cliente(idCliente),
foreign key(fkHobbie) references Hobbies(idHobbie)
) COMMENT 'TABELA DOS RESULTADOS DO SEGUNDO QUIZ';

select * from Cliente;

insert into Cliente (Nome, Email, Hobbie, Senha)
values ('Bruno','bruno@sptech', 'Boxe', 'bruno');

