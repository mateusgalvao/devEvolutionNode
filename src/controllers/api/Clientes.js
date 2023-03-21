const ClienteService = new (require('../../services/Cliente'));

module.exports = class Clientes{

    async find(req, res){
        const retorno = await ClienteService.find(req.body);
        res.json(retorno);
    }
    
    async create(req, res){
        const retorno = await ClienteService.create(req.body)
        res.json(retorno)
    }

}