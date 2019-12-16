'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const adicionalModel = new schema({
    idEmpresa: { type: schema.Types.ObjectId, ref: 'empresa', required: [true, 'campo obrigatório'] },
    empresa: { type: String, required: [true, 'campo obrigatório'], uppercase: true },
    idProduto: { type: schema.Types.ObjectId, ref: 'produto' },
    produto: { type: String, required: [true, 'campo obrigatório'], uppercase: true },
    valor: { type: String, required: [true, 'campo obrigatório'] },
    nome: { type: String, required: [true, 'campo obrigatório'] },
    descricao: { type: String, required: [true, 'campo obrigatório'] },
    ativo: { type: Boolean, required: [true, 'campo obrigatório'], default: true },
    dataCriacao: { type: Date, default: Date.now }
},
    { versionKey: false },
    { timestamps: true });

adicionalModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model('adicional', adicionalModel);