var database = require("../database/config");

function buscarUltimasMedidas(idGrafico) {
    if (idGrafico == 1) {
        var instrucaoSql = `SELECT 
        Hobbie,
        COUNT(*) AS total
        FROM Cliente
        GROUP BY Hobbie;`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }
}

function buscarMedidasEmTempoReal(idIndicador, idUsuario) {
    let instrucaoSql = "";

    if (idIndicador == 1) {
        instrucaoSql = `
            SELECT MAX(Pontuacao) Pontuacao
            FROM ResultadoQuiz1
            WHERE fkCliente = ${idUsuario}
            ORDER BY idQuiz1 DESC
            LIMIT 1;
        `;
    } else if (idIndicador == 2) {
        instrucaoSql = `
            SELECT hobbie
            FROM ResultadoQuiz2
            WHERE fkCliente = ${idUsuario}
            ORDER BY idQuiz2 DESC
            LIMIT 1;
        `;
    } else if (idIndicador == 3) {
        instrucaoSql = `
        SELECT 
        Hobbie AS ranking_hobbie,
        COUNT(*) AS quantidade
        FROM Cliente
        GROUP BY Hobbie
        ORDER BY quantidade DESC
        LIMIT 6;
        `;
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
