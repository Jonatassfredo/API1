'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const mensagemModel = new schema({
    idChat: { type: schema.Types.ObjectId, ref: 'chat', required: [true, 'campo obrigatório'] },
    mensagem: { type: String, required: [true, 'campo obrigatório'] },
    tipoMensagem: { type: String, required: [true, 'campo obrigatório'] },
    dataCriacao: { type: Date, default: Date.now }
},
    { versionKey: false },
    { timestamps: true });

mensagemModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model('mensagem', mensagemModel);