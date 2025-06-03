var express = require("express");
var router = express.Router();

var medidasController = require("../controllers/medidasController");

router.get("/ultimas/:idGrafico", function (req, res) {
    medidasController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idIndicador", function (req, res) {
    medidasController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;