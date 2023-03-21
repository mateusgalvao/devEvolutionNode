const express = require("express");
const router = express.Router();
const usuariosController = new(require('../controllers/api/Usuarios'));

const validate = require('./auth/validate');

router.get('/', usuariosController.find);
router.get('/:id', usuariosController.findOne);
router.post('/cadastro', usuariosController.cadastroUsuario);
router.post('/login', validate() ,usuariosController.login);
router.post('/gerarToken', usuariosController.gerarToken);
router.put('/:id',usuariosController.updateOne);
router.delete('/:id', usuariosController.deleteOne);

module.exports = router;