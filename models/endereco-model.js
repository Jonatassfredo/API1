'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const enderecoModel = new schema({
    usuarioId: { type: schema.Types.ObjectId, ref: 'usuario' },
    pontoReferencia: { type: String },
    orientacoes: { type: String },
    idCidade: { type: schema.Types.ObjectId, ref: 'cidade', required: [true, 'campo obrigatório'] },
    cidade: { type: String, required: [true, 'campo obrigatório'], uppercase: true },
    cep: { type: String, required: [true, 'campo obrigatório'] },
    estado: { type: String, required: [true, 'campo obrigatório'], uppercase: true, trim: true },
    idBairro: { type: schema.Types.ObjectId, ref: 'bairro', required: [true, 'campo obrigatório'] },
    bairro: { type: String, required: [true, 'campo obrigatório'] },
    rua: { type: String },
    ativo: { type: Boolean, required: [true, 'campo obrigatório'], default: true },
    dataCriacao: { type: Date, default: Date.now }
},
    { versionKey: false },
    { timestamps: true });

enderecoModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model('endereco', enderecoModel);