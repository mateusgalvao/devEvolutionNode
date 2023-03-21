const pedidoService = new (require('../../services/Pedido'));

module.exports = class Pedidos{
    
    async create(req, res){
        try {
            const retorno = await pedidoService.create(req.body)
            res.json(retorno)
            
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async find(req, res){
        try {
            const retorno = await pedidoService.find(req.body);
            res.json(retorno);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async findOne(req, res){
        try {
            const retorno = await pedidoService.findOne(req.params.id);
            res.json(retorno);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    async updateOne(req, res){
        try {
            const retorno = await pedidoService.updateOne(req.params.id ,req.body);
            res.json(retorno);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    async deleteOne(req, res){
        try {
            const retorno = await pedidoService.deleteOne(req.params.id);
            res.json(retorno);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async associarProduto(req, res) {
        try {
          const produtoId = req.body.produto;
          const pedidoId = req.params.id;
          const resultado = await pedidoService.associarPedidoAoProduto(pedidoId, produtoId);
          res.json(resultado);
        } catch (error) {
          res.status(500).json({ erro: 'Não foi possível associar o produto ao pedido' });
        }
    }

    async dadosFaturamento(req, res){
        try {
            const dados = await pedidoService.dadosFaturamento();
            res.json(dados);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}