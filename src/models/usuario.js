const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
    confirmaSenha:String,
    permissao:String,
    telefone: String,
    
    item: {type: mongoose.Schema.Types.ObjectId, ref: 'item'}

},{timestamps: true});

module.exports = mongoose.model('usuario', usuarioSchema, 'usuarios');