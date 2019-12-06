'use strict'
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const empresaModel = new schema({
    nome: { type: String, required: [true, 'campo obrigatório'], uppercase: true, trim: true },
    cpf: { type: String, unique: true, minlength: 11, trim: true },
    cnpj: { type: String, unique: true, minlength: 14, trim: true },
    senha: { type: String, required: [true, 'campo obrigatório'] },
    ativo: { type: Boolean, required: [true, 'campo obrigatório'], default: true },
    dataCriacao: { type: Date, default: Date.now },
    endereco: { type: String },
    descricao: { type: String },
    email: { type: String },
    telefone: { type: Number },
    foto: { type: String }
},
    { versionKey: false },
    { timestamps: true });

empresaModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model('empresa', empresaModel);