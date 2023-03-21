const express = require("express");
const router = express.Router();

const homeControllers = new(require('../controllers/render/HomeCliente'));

router.get('/', homeControllers.getProdutos);
router.get("/getById/:id/:method", homeControllers.getById);
router.post("/updateOne/:id", homeControllers.updateOneproduto);
router.get("/deleteOne/:id", homeControllers.deleteOneproduto);
router.get("/check/:id", homeControllers.produtoCheck);

module.exports = router;