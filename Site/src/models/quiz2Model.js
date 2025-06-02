var database = require("../database/config")

function listar(idUsuario) {
    var instrucao = `
        SELECT hobbie as Hobbie FROM ResultadoQuiz2 where fkCliente = ('${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(idUsuario, hobbie) {
    var instrucao = `
        INSERT INTO ResultadoQuiz2 (fkCliente, hobbie) VALUES ('${idUsuario}', '${hobbie}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};