const mongoose = require('mongoose');

const clienteSchema = mongoose.Schema({
    nome: String,
    endereco:String,
    email: String,
    senha: String,
    telefone: String,
    
    pedido: {type: mongoose.Schema.Types.ObjectId, ref: 'pedido'}

},{timestamps: true});

module.exports = mongoose.model('cliente', clienteSchema, 'clientes');