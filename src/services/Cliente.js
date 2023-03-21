const modelCliente = require('../models/cliente');

module.exports = class Cliente{

    async find(body){
        const cliente = await modelCliente.find(body)
        return cliente;
    }

    async create(body){
      const cliente = await modelCliente.create(body);
        // return cliente;
      const nome = body.nome
      const endereco = body.endereco

      if(!nome){return "O nome é Obrigatório";}
      if(!endereco){return "O endereco é Obrigatório";}
      
      try { await cliente;
        return cliente;
                    
      } catch (error) {
        return error;
      }
    }
}