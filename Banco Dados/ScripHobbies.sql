drop database if exists HobbiesDatabase;
create database HobbiesDatabase;
use HobbiesDatabase;

create table Cliente(
idCliente int auto_increment not null,
Nome varchar(45) not null,
Sobrenome varchar(45) not null,
dtNascimento date not null,
Email varchar(45) not null,
Cpf char(11),
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


insert into Cliente (Nome, Sobrenome, dtNascimento, Email, Cpf, Hobbie, Senha)
values ('Bruno', 'Prado', '2006-09-18', 'bruno@sptech', '54454554554', 'Jogar', 'bruno');

