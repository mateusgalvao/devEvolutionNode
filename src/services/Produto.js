const modelProduto = require('../models/produto');
const Pedido = require('../models/pedidos');
let produtosList = require('../../public/produtos.json')

module.exports = class Produto{

    async find(body){
        const produto = await modelProduto.find(body)
        return produto;
    }

    async findPop(filter) {
        const produtos = await modelProduto.find(filter).populate({path: 'pedido', select: 'nome -_id'});
        return produtos;
    }

    async create(body){
        const nome = await modelProduto.create(body);
        return nome;
    }

    async gerarProdutos(produto) {
        const nomes = [];
        for (const produtos of produtosList) {
          const nome = await modelProduto.create(produtos);
          nomes.push(nome);
        }
        return nomes;
    }

    async createMany(produtos) {
        const nomes = [];
        for (const produto of produtos) {
          const nome = await modelProduto.create(produto);
          nomes.push(nome);
        }
        return nomes;
    }

    async deleteOne(id){
        const produto = await modelProduto.deleteOne({_id:id});
        return produto;
    }

    async updateOne(id, body){
        const produto = await modelProduto.updateOne({_id:id}, {$set:body});
        return produto;
    }

    async findOne(id){
        const produto = await modelProduto.findOne({_id:id});
        return produto;
    }

      async associarPedidoAoProduto(produtoId) {
        try {
            const produto = await modelProduto.findOne({ _id: produtoId })
            await produto.save();
            return 'Pedido associado ao produto com sucesso!';
        } catch (error) {
            throw new Error('Não foi possível associar o pedido ao produto');
        }
    }  
}