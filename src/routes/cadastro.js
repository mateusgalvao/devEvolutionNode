const express = require("express");
const router = express.Router();

const loginControllers = new(require('../controllers/render/Login'));
const cadastroControllers = new(require('../controllers/render/CadastroUsuario'));

router.get('/', cadastroControllers.cadastro);
router.post('/', cadastroControllers.cadastroUsuario);

router.get('/login', loginControllers.login);
router.post('/login', loginControllers.loginPost);

module.exports = router;