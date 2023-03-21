const produtoService = new (require('../../services/Produto'));
const pedidoService = new (require('../../services/Pedido'));
const clienteService = new (require('../../services/Cliente'));

const bcrypt = require('bcrypt');

let message = "";
let type = "";

module.exports = class Dashboard{

    async getProdutos(req,res){
        try {
            const pedido = await pedidoService.find();
            const produtoList = await produtoService.find();
            const clientes = await clienteService.find();
            const faturamento = await pedidoService.dadosFaturamento();
            const dado = faturamento.toFixed(2)

            return res.render("dashboard", {pedido, clientes, produtoList, dado, item: null,itemDelete: null,message,type,});
          } catch (err) {
            res.status(500).send({ error: err.message });
          }
    }
}