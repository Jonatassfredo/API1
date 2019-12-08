'use strict'
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const cidadeModel = new schema({
    nome: { type: String, required: [true, 'campo obrigatório'], uppercase: true },
    estado: { type: String, required: [true, 'campo obrigatório'], uppercase: true, trim: true },
    cep: { type: String, required: [true, 'campo obrigatório'], unique: true, minlength: 8, maxlength: 8, trim: true },
    ativo: { type: Boolean, required: [true, 'campo obrigatório'], default: true },
    dataCriacao: { type: Date, default: Date.now },
},
    { versionKey: false },
    { timestamps: true });

cidadeModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model('cidade', cidadeModel);