var quiz2Model = require("../models/quiz2Model");

function listar(req, res) {
    var id = req.body.idUsuario;

    quiz2Model.listar(id).then(
        
        function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json({
                            hobbie: resultado[0].hobbie
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
    console.log('==> Entrou no controller.quiz2.cadastrar');

    const hobbie = req.body.hobbie;
    const id = req.body.idUsuario;

    console.log("Dados recebidos no body:");
    console.log("ID:", id);
    console.log("Hobbie:", hobbie);

    if (hobbie == undefined || id == undefined) {
        res.status(400).send("ID ou pontuação estão undefined!");
        return;
    }

    quiz2Model.cadastrar(id, hobbie)
        .then(function (resposta) {
            res.status(200).send("Pontuação salva com sucesso");
        })
        .catch(function (erro) {
            console.log("Erro ao cadastrar:", erro);
            res.status(500).json(erro.sqlMessage);
        });
}



module.exports = {
    listar,
    cadastrar
}