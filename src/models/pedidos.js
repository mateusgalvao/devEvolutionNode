const mongoose = require('mongoose');

const pedidoSchema = mongoose.Schema({
    numero:Number,
    quantidade:Number,
    produto: {type: mongoose.Schema.Types.ObjectId, ref: 'produto'}
},{timestamps: true});

module.exports = mongoose.model('pedido', pedidoSchema, 'pedidos');