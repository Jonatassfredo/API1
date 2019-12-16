'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const administradorModel = new schema({
    nome: { type: String, required: [true, 'campo obrigatório'], uppercase: true },
    descricao: { type: String, required: [true, 'campo obrigatório'] },
    token: { type: String },
    ativo: { type: Boolean, required: [true, 'campo obrigatório'], default: true },
    dataCriacao: { type: Date, default: Date.now }
},
    { versionKey: false },
    { timestamps: true });

administradorModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model('administrador', administradorModel);