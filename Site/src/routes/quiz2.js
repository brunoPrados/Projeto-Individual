var express = require("express");
var router = express.Router();

var quiz2Controller = require("../controllers/quiz2Controller");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /quiz/cadastrar
    quiz2Controller.cadastrar(req, res);
    console.log('Acessei aqui!')
});

router.post("/listar", function (req, res) {
    // função a ser chamada quando acessar /quiz/listar
    quiz2Controller.listar(req, res);
});

module.exports = router;