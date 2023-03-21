const produtoService = new (require('../../services/Produto'));
const bcrypt = require('bcrypt');

let message = "";
let type = "";

module.exports = class HomeCliente{


    async getProdutos(req,res){
      try {
        setTimeout(() => {
          message = "";
        }, 1000);
        const produtoList = await produtoService.find();
        return res.render("home", {
          produtoList,
          produto: null,
          produtoUpdate:null,
          produtoDelete: null,
          message,
          type,
        });
      } catch (err) {
        res.redirect('/err');
      }
    }

    async createMany(req, res){
        const retorno = await produtoService.createMany(req.body);
        res.json(retorno)
      }

    async getById(req,res){
      try {
        const produtoList = await produtoService.find();
        if (req.params.method == "delete") {
          const produto = await produtoService.findOne({ _id: req.params.id });
          res.render("home", { produto, produtoUpdate: null, produtoList, message, type });
        } else {
          const produtoUpdate = await produtoService.findOne({ _id: req.params.id });
          res.render("home", { produto: null, produtoUpdate, produtoList, message, type });
        }
        } catch (err) {
          res.redirect('/err');
        }
      }
      async updateOneproduto(req, res){
        try {
          const produto = req.body;
          await produtoService.updateOne({ _id: req.params.id }, produto);
          message = "produto atualizado com sucesso!";
          type = "success";
          res.redirect("/home");
        } catch (err) {
          res.status(500).send({ error: err.message });
        }
      }
  
      async deleteOneproduto(req, res){
        try {
          await produtoService.deleteOne({ _id: req.params.id });
          message = "produto apagado com sucesso!";
          type = "success";
          res.redirect("/");
        } catch (err) {
          res.status(500).send({ error: err.message });
        }
      }
  
      async produtoCheck(req, res){
        try {
          const produto = await produtoService.findOne({ _id: req.params.id });
          produto.check ? produto.check = false : produto.check = true;
          await produtoService.updateOne({ _id: req.params.id }, produto);
          res.redirect("/");
        } catch (err) {
          res.status(500).send({ error: err.message });
        }
      }
}