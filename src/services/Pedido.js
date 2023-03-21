const modelPedido = require('../models/pedidos');

module.exports = class Pedido{

    async find(filter){
        const pedido = await modelPedido.find(filter).populate({path: 'produto', select: 'nome -_id'});
        return pedido;
    }

    async create(body){
        const pedido = await modelPedido.create(body);
        return pedido;
    }

    async updateOne(id, body){
        const pedido = await modelPedido.updateOne({_id:id}, {$set:body});
        return pedido;
    }

    async findOne(id) {
      const pedidos = await modelPedido.findOne({_id: id}).populate('produto');
      return pedidos;
  }
    
    async deleteOne(id){
        const pedido = await modelPedido.deleteOne({_id:id});
        return pedido;
    }

    async associarPedidoAoProduto(pedidoId, produtoId) {
        try {
          const pedido = await modelPedido.findByIdAndUpdate(
            pedidoId,
            { produto: produtoId },
            { new: true }
          ).populate('produto');
      
          return `Pedido ${pedidoId} associado ao produto ${produtoId} com sucesso!`;
        } catch (error) {
          throw new Error('Não foi possível associar o pedido ao produto');
        }
      }   

    async dadosFaturamento(){
      const resultado = await modelPedido.aggregate([
        {$match: { produto: { $ne: null }}},
        {$lookup: {from: 'produtos',localField: 'produto',foreignField: '_id',as: 'produto'}},
        {$unwind: '$produto'},
        {$group: {_id: '$produto._id',
                  sabor: { $first: '$produto.sabor' },
                  valorTotal: { $sum: { $multiply: ['$produto.preco', '$produto.quantidade'] } },
                  quantidadeTotal: { $sum: '$produto.quantidade' }}},
        {$project: {
                _id: 1,
                sabor: 1,
                valorTotal: 1,
                quantidadeTotal: 1
        }}]);
        const valorTotal = resultado.reduce((acumulador, item) => acumulador + item.valorTotal, 0);
        return valorTotal;
    }

}