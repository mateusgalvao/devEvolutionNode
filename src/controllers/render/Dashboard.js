const produtoService = new (require('../../services/Produto'));
const pedidoService = new (require('../../services/Pedido'));

const bcrypt = require('bcrypt');

let message = "";
let type = "";

module.exports = class Dashboard{

    async getProdutos(req,res){
        try {
            setTimeout(() => {
              message = "";
            }, 1000);
            const produtoList = await produtoService.find();
            return res.render("dashboard", {produtoList,item: null,itemDelete: null,message,type,});
          } catch (err) {
            res.status(500).send({ error: err.message });
          }
    }

    async dadosFaturamento(req,res){
      const dados = pedidoService.dadosFaturamento();

    }
}