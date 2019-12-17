'use strict'
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const empresaModel = new schema({
    nome: { type: String, required: [true, 'campo obrigatório'], uppercase: true, trim: true },
    cpf: { type: String, unique: true, minlength: 11, maxlength: 11, trim: true },
    cnpj: { type: String, unique: true, minlength: 14, maxlength: 14, trim: true },
    senha: { type: String, required: [true, 'campo obrigatório'] },
    idCidade: { type: schema.Types.ObjectId, ref: 'cidade', required: [true, 'campo obrigatório'] },
    cidade: { type: String, required: [true, 'campo obrigatório'], uppercase: true },
    cep: { type: String, required: [true, 'campo obrigatório'] },
    estado: { type: String, required: [true, 'campo obrigatório'], uppercase: true, trim: true },
    idBairro: { type: schema.Types.ObjectId, ref: 'bairro', required: [true, 'campo obrigatório'] },
    bairro: { type: String, required: [true, 'campo obrigatório'] },
    rua: { type: String, required: [true, 'campo obrigatório'] },
    numero: { type: String, required: [true, 'campo obrigatório'] },
    descricao: { type: String },
    email: { type: String, unique: true, lowercase: true, trim: true },
    telefone: { type: String },
    formaPagamento: { type: String },
    avatar: { type: String },
    token: { type: String },
    realizaEntrega: { type: Boolean, required: [true, 'campo obrigatório'] },
    ativo: { type: Boolean, required: [true, 'campo obrigatório'], default: true },
    dataCriacao: { type: Date, default: Date.now }
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