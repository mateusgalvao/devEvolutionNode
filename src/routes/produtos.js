const express = require("express");
const router = express.Router();

const produtosController = new(require('../controllers/api/Produtos'));
const validate = require('./auth/validate');

router.get('/',validate(), produtosController.findProdutos);
router.get('/te/:id',validate(), produtosController.associarProduto);
router.post('/',validate(), produtosController.createProduto);
router.post('/many',validate(), produtosController.createManyProdutos);
router.post('/gerar',validate(), produtosController.gerarProdutos);
router.get('/:id',validate(), produtosController.findOneProduto);
router.put('/:id',validate(), produtosController.updateOneProduto);
router.delete('/:id',validate(), produtosController.deleteOneProduto);

module.exports = router;