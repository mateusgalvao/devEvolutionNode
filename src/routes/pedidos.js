const express = require("express");
const router = express.Router();

const pedidosController = new(require('../controllers/api/Pedidos'))

router.post('/', pedidosController.create);
router.put('/:id',pedidosController.updateOne);
router.put('/associarProduto/:id', pedidosController.associarProduto);
router.get('/dadosFaturamento', pedidosController.dadosFaturamento)
router.get('/', pedidosController.find);
router.get('/:id', pedidosController.findOne);
router.delete('/:id', pedidosController.deleteOne);

module.exports = router;