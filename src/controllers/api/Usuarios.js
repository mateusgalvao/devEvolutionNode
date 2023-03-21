const UsuarioService = new (require('../../services/Usuario'));

module.exports = class Usuarios{

    async gerarToken(req,res){
        const retorno = await UsuarioService.gerarToken(req.body);
        res.json(retorno)
    }

    async cadastroUsuario(req, res){
        try {
            const retorno = await UsuarioService.cadastroUsuario(req.body);
            const token = await UsuarioService.gerarToken(retorno)
            res.json(`usuario ${retorno._id} token: ${token} `);
                
        } catch (error) {
            res.status(422).json({ message: 'Por favor, utilize outro e-mail!' })}
    }

    async login(req,res){
        const retorno = await UsuarioService.login(req.body)
        res.json(retorno)
    }

    async find(req, res){
        const retorno = await UsuarioService.find(req.body);
        res.json(retorno);
    }

    async findOne(req, res){
        const retorno = await UsuarioService.findOne(req.params.id);
        res.json(retorno);
    }

    async updateOne(req, res){
        const retorno = await UsuarioService.updateOne(req.params.id ,req.body)
        res.json(retorno)

    }

    async deleteOne(req, res){
        const retorno = await UsuarioService.deleteOne(req.params.id);
        res.json(retorno);
    }

}