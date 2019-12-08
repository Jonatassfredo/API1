'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const usuarioModel = new schema({
    nome: { type: String, required: [true, 'campo obrigatório'], uppercase: true, trim: true },
    cpf: { type: String, unique: true, minlength: 11, maxlength: 11, trim: true },
    cnpj: { type: String, unique: true, minlength: 14, maxlength: 14, trim: true },
    senha: { type: String, required: [true, 'campo obrigatório'] },
    email: { type: String, unique: true, lowercase: true, trim: true },
    telefone: { type: String },
    avatar: { type: String },
    token: { type: String },
    dataNascimento: { type: Date },
    ativo: { type: Boolean, required: [true, 'campo obrigatório'], default: true },
    dataCriacao: { type: Date, default: Date.now }
},
    { versionKey: false },
    { timestamps: true });

usuarioModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model('usuario', usuarioModel);