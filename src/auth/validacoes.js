class Validacoes {
    static validarId(id) {
      if (!id || typeof id !== 'string') {
        throw new Error('ID inválido');
      }
    }
  
    static validarProduto(produto) {
      if (!produto || typeof produto !== 'object') {
        throw new Error('Produto inválido');
      }
  
      const { nome, preco } = produto;
  
      if (!nome || typeof nome !== 'string') {
        throw new Error('Nome do produto inválido');
      }
  
      if (!preco || typeof preco !== 'number' || preco <= 0) {
        throw new Error('Preço do produto inválido');
      }
    }
  }
  
  module.exports = Validacoes;