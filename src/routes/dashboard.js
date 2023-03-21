const express = require("express");
const router = express.Router();

const dashboard = new(require('../controllers/render/Dashboard'));

router.get('/', dashboard.getProdutos);

module.exports = router;