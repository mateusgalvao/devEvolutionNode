const express = require("express");
const router = express.Router();
const usuariosController = new(require('../controllers/api/Usuarios'));

const validate = require('./auth/validate');

router.get('/',validate(), usuariosController.find);
router.get('/:id',validate(), usuariosController.findOne);
router.post('/cadastro', usuariosController.cadastroUsuario);
router.post('/login', validate() ,usuariosController.login);
router.post('/gerarToken',validate(), usuariosController.gerarToken);
router.put('/:id',validate(), usuariosController.updateOne);
router.delete('/:id',validate(), usuariosController.deleteOne);

module.exports = router;