const UsuarioService = new (require('../../services/Usuario'));

let message = "";
let type = "";

module.exports = class Home{
       
    async login(req, res){
        res.render('login', {message: '', type:{}});
    }

    async loginPost(req, res) {
      try {
        const retorno = await UsuarioService.login(req.body);

        if (typeof retorno === "string") {
          message = retorno;
          type = "danger";
          res.render('login', { message, type });
          return;
        }    
        const token = await UsuarioService.gerarToken(retorno);
        message = "sucesso!";
        type = "success";
        res.redirect('/');
      } catch (error) {
        res.redirect('/err');
      }
    }
    

}