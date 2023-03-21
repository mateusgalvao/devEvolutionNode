const mongoose = require('mongoose');

const produtoSchema = mongoose.Schema({
    nome: String,
    sabor: String,
    descricao:String,
    tipo: String,
    quantidade:Number,
    preco:Number,
    check: {
        type: Boolean,
        default: false,
      },
    produto: {type: mongoose.Schema.Types.ObjectId, ref: 'produtos'}

},{timestamps: true});

module.exports = mongoose.model('produto', produtoSchema, 'produtos');