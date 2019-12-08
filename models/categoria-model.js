'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const categoriaModel = new schema({
    titulo: { type: String, required: [true, 'campo obrigatório']},
    idEmpresa: { type: schema.Types.ObjectId, ref: 'empresa', required: [true, 'campo obrigatório']},
    empresa: { type: String, required: [true, 'campo obrigatório'], uppercase: true },
    ativo: { type: Boolean, required: [true, 'campo obrigatório'], default: true },
    dataCriacao: { type: Date, default: Date.now }
},
    { versionKey: false },
    { timestamps: true });

    categoriaModel.pre('save', next => {
        let agora = new Date();
        if (!this.dataCriacao)
            this.dataCriacao = agora;
        next();
    });

module.exports = mongoose.model('categoria', categoriaModel);