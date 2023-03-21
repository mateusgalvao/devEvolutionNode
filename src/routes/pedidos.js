const express = require("express");
const router = express.Router();

const pedidosController = new(require('../controllers/api/Pedidos'))
const validate = require('./auth/validate');

router.post('/', validate(), pedidosController.create);
router.put('/:id', validate(),pedidosController.updateOne);
router.put('/associarProduto/:id',validate(), pedidosController.associarProduto);
router.get('/dadosFaturamento',validate(), pedidosController.dadosFaturamento)
router.get('/',validate(), pedidosController.find);
router.get('/:id',validate(), pedidosController.findOne);
router.delete('/:id',validate(), pedidosController.deleteOne);

module.exports = router;