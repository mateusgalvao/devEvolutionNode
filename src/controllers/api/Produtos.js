const ProdutoService = new (require('../../services/Produto'));
const { validarId, validarProduto } = require('../../auth/validacoes');

module.exports = class ProdutosController {

    async createProduto(req, res) {
        try {
        validarProduto(req.body);
        const produto = await ProdutoService.create(req.body);
        res.json(produto);
        } catch (error) {
        res.status(400).json({ message: error.message });
        }
    }

    async gerarProdutos(req, res) {
        try {
        const produto = await ProdutoService.gerarProdutos(req.body);
        res.json(produto);
        } catch (error) {
        res.status(400).json({ message: error.message });
        }
    }

    async createManyProdutos(req, res) {
        try {
        const produtos = await ProdutoService.createMany(req.body);
        res.json(produtos);
        } catch (error) {
        res.status(400).json({ message: error.message });
        }
    }

    async findProdutos(req, res) {
        try {
        const produtos = await ProdutoService.find(req.query);
        res.json(produtos);
        } catch (error) {
        res.status(400).json({ message: error.message });
        }
    }

    async findOneProduto(req, res) {
        try {
        validarId(req.params.id);
        const produto = await ProdutoService.findOne(req.params.id);
        res.json(produto);
        } catch (error) {
        res.status(400).json({ message: error.message });
        }
    }

    async deleteOneProduto(req, res) {
        try {
        validarId(req.params.id);
        const produto = await ProdutoService.deleteOne(req.params.id);
        res.json(produto);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
        }
    
    async updateOneProduto(req, res){
        try {
            validarId(req.params.id);
            const produto = await ProdutoService.updateOne(req.params.id ,req.body);
            res.json(produto);
            } catch (error) {
                res.status(400).json({ message: error.message });
            }
    }

    async associarProduto (req, res){
        const produto = await ProdutoService.associarPedidoAoProduto(req.params.id, req.body);
        res.json(produto)
    }
    
}

