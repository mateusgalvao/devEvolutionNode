const express = require("express");
const router = express.Router();

const homeControllers = new(require('../controllers/render/Home'));
const erroController = new(require('../controllers/render/paginaErro'));
const validate = require('./auth/validate');

router.get('/', homeControllers.getProdutos);
router.get('/err', erroController.getErro);
router.post('/create', homeControllers.criarProduto);
router.post('/gerar', homeControllers.gerarProdutos);
router.get("/getById/:id/:method", homeControllers.getById);
router.post("/updateOne/:id", homeControllers.updateOneItem);
router.get("/deleteOne/:id", homeControllers.deleteOneItem);
router.get("/check/:id", homeControllers.itemCheck);

module.exports = router;


