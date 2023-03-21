const express = require("express");
const router = express.Router();

const produtosController = new(require('../controllers/api/Produtos'));
const validate = require('./auth/validate');

router.get('/', produtosController.findProdutos);
router.get('/te/:id', produtosController.associarProduto);
router.post('/', produtosController.createProduto);
router.post('/many', produtosController.createManyProdutos);
router.post('/gerar', produtosController.gerarProdutos);
router.get('/:id', produtosController.findOneProduto);
router.put('/:id', produtosController.updateOneProduto);
router.delete('/:id', produtosController.deleteOneProduto);

module.exports = router;