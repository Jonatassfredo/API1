'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const avaliacaoModel = new schema({
    idEmpresa: { type: schema.Types.ObjectId, ref: 'empresa', required: [true, 'campo obrigatório'] },
    empresa: { type: String, required: [true, 'campo obrigatório'], uppercase: true },
    usuarioId: { type: schema.Types.ObjectId, ref: 'usuario' },
    usuario: { type: String, required: [true, 'campo obrigatório'], uppercase: true },
    nota: { type: Number, required: [true, 'campo obrigatório'] },
    comentário: { type: String, required: [true, 'campo obrigatório'] },
    ativo: { type: Boolean, required: [true, 'campo obrigatório'], default: true },
    dataCriacao: { type: Date, default: Date.now }
},
    { versionKey: false },
    { timestamps: true });

avaliacaoModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model('avaliacao', avaliacaoModel);