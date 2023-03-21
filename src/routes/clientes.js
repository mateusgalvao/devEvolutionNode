const express = require("express");
const router = express.Router();

const clienteController = new(require('../controllers/api/Clientes'))

router.get('/', clienteController.find);
router.post('/', clienteController.create);

module.exports = router;