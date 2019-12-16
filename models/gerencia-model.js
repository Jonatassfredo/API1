'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const gerenciaModel = new schema({
    idEmpresa: { type: schema.Types.ObjectId, ref: 'empresa', required: [true, 'campo obrigatório'] },
    empresa: { type: String, required: [true, 'campo obrigatório'], uppercase: true },
    nome: { type: String, required: [true, 'campo obrigatório'], uppercase: true },
    descricao: { type: String, required: [true, 'campo obrigatório'] },
    token: { type: String },
    ativo: { type: Boolean, required: [true, 'campo obrigatório'], default: true },
    dataCriacao: { type: Date, default: Date.now }
},
    { versionKey: false },
    { timestamps: true });

gerenciaModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model('gerencia', gerenciaModel);