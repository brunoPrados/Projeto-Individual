var database = require("../database/config")

function listar(idUsuario) {
    var instrucao = `
        SELECT max(Pontuacao) as pontuacao FROM ResultadoQuiz1 where fkCliente = ('${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(idUsuario, pontuacao) {
    var instrucao = `
        INSERT INTO ResultadoQuiz1 (fkCliente, Pontuacao) VALUES ('${idUsuario}', ${pontuacao});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};