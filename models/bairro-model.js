'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const bairroModel = new schema({
    idEmpresa: { type: schema.Types.ObjectId, ref: 'empresa', required: [true, 'campo obrigatório'] },
    empresa: { type: String, required: [true, 'campo obrigatório'], uppercase: true },
    idCidade: { type: schema.Types.ObjectId, ref: 'cidade', required: [true, 'campo obrigatório'] },
    cidade: { type: String, required: [true, 'campo obrigatório'], uppercase: true },
    valorEntrega: { type: String, required: [true, 'campo obrigatório'] },
    nomeBairro: { type: String, required: [true, 'campo obrigatório'], uppercase: true },
    ativo: { type: Boolean, required: [true, 'campo obrigatório'], default: true },
    dataCriacao: { type: Date, default: Date.now }
},
    { versionKey: false },
    { timestamps: true });

bairroModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model('bairro', bairroModel);