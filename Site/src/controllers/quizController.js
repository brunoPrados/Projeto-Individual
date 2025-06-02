var quizModel = require("../models/quizModel");

function listar(req, res) {
    var id = req.body.idUsuario;

    quizModel.listar(id).then(
        
        function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json({
                            pontuacao: resultado[0].pontuacao
                        });
                    } 
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao consultar a pontuação! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

function cadastrar(req, res) {
    console.log('Aqui também')
    var pontuacao = req.body.pontuacao;
    var id = req.body.idUsuario; 

    if (pontuacao == undefined || id == undefined) {
        res.status(400).send("ID ou pontuação estão undefined!");
        return;
    }

    quizModel.cadastrar(id, pontuacao).then(function(resposta){
        res.status(200).send("Pontuação salva com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    listar,
    cadastrar
}