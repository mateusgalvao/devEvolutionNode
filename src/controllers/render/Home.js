const itemService = new (require('../../services/Produto'));
const bcrypt = require('bcrypt');

let message = "";
let type = "";

module.exports = class Home{

    async getProdutos(req,res){
        try {
            setTimeout(() => {
              message = "";
            }, 1000);
            const produtosList = await itemService.find();
            return res.render("index", {produtosList,item: null,itemDelete: null,message,type,});
          } catch (err) {
            res.status(500).send({ error: err.message });
          }
    }

    async gerarProdutos(req, res){
        try {
         const produto = await itemService.gerarProdutos(req.body);
         return res.redirect("/");
        } catch (error) {
         res.status(400).json({ message: error.message });
        }

    }

    async criarProduto(req, res){
        const produto = await itemService.create(req.body)
        if (!produto.nome && !produto.preco) {
            message = "Insira um texto, antes de adicionar um produto!";
            type = "danger";
            return res.redirect("/");
        }
        try {
            message = "Item criado com sucesso!";
            type = "success";
            return res.redirect("/");
        } catch (err) {
            res.status(500).send({ error: err.message });
        }
    }
    async createProdutoMany(req, res){
      const retorno = await itemService.createMany(req.body);
      res.json(retorno)
  }

    async getById(req,res){
      try {
        const produtosList = await itemService.find();
        if (req.params.method == "update") {
          const item = await itemService.findOne({ _id: req.params.id });
          res.render("index", { item, itemDelete: null, produtosList, message, type });
        } else {
          const itemDelete = await itemService.findOne({ _id: req.params.id });
          res.render("index", { item: null, itemDelete, produtosList, message, type });
        }
      } catch (err) {
        res.status(500).send({ error: err.message });
      }
    }

    async updateOneItem(req, res){
      try {
        const item = req.body;
        await itemService.updateOne({ _id: req.params.id }, item);
        message = "Item atualizado com sucesso!";
        type = "success";
        res.redirect("/");
      } catch (err) {
        res.status(500).send({ error: err.message });
      }
    }

    async deleteOneItem(req, res){
      try {
        await itemService.deleteOne({ _id: req.params.id });
        message = "Item apagado com sucesso!";
        type = "success";
        res.redirect("/");
      } catch (err) {
        res.status(500).send({ error: err.message });
      }
    }

    async itemCheck(req, res){
      try {
        const item = await itemService.findOne({ _id: req.params.id });
        item.check ? item.check = false : item.check = true;
        await itemService.updateOne({ _id: req.params.id }, item);
        res.redirect("/");
      } catch (err) {
        res.status(500).send({ error: err.message });
      }
    }

}