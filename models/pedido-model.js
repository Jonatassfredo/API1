'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const pedidoModel = new schema({
    idEmpresa: { type: schema.Types.ObjectId, ref: 'empresa', required: [true, 'campo obrigatório'] },
    empresa: { type: String, required: [true, 'campo obrigatório'], uppercase: true },
    idUsuario: { type: schema.Types.ObjectId, ref: 'usuario', required: [true, 'campo obrigatório'] },
    usuario: { type: String, required: [true, 'campo obrigatório'], uppercase: true },
    produtos: { type: Object, required: [true, 'campo obrigatório'] },
    enderecoEntrega: { type: Object, required: [true, 'campo obrigatório'] },
    valorTotal: { type: String, required: [true, 'campo obrigatório'] },
    formaPagamento: { type: String },
    status: { type: String },
    dataAceito: { type: Date },
    dataCriacao: { type: Date, default: Date.now }
},
    { versionKey: false },
    { timestamps: true });

pedidoModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model('pedido', pedidoModel);