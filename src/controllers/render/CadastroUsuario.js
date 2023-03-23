const UsuarioService = new (require('../../services/Usuario'));

let message = "";
let type = "";

module.exports = class Resgister{
    async cadastro(req, res){
        res.render('cadastro', {message: '', type:{}});
    }

    async cadastroUsuario(req, res){
        try {
          const retorno = await UsuarioService.cadastroUsuario(req.body);       
          if (typeof retorno === "string") {
            const message = retorno;
            const type = "danger";
            res.render("cadastro", { message, type });
            return;
          }
          const message = "Sucesso!";
          const type = "success";
          res.render("login", { message, type }); 
        } catch  (err) {
          res.status(500).send({ error: err.message });
        }
      }
    
}
