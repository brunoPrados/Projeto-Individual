var medidasModel = require("../models/medidasModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 5;

    var idGrafico = req.params.idGrafico;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidasModel.buscarUltimasMedidas(idGrafico, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {
    var idIndicador = req.params.idIndicador;

    var idUsuario = req.query.idUsuario;

    if (!idUsuario) {
        return res.status(400).send("ID do usuário não fornecido.");
    }

    console.log(`Recuperando medidas em tempo real para o usuário ${idUsuario}`);

    medidasModel.buscarMedidasEmTempoReal(idIndicador, idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal

}