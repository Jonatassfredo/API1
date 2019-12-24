require('../models/usuario-model');

const base = require('../bin/base/repository-base');
const md5 = require('md5');

class usuarioRepository {

    constructor() {
        this._base = new base('usuario');
        this._projection = '_id nome email cpf cnpj senha email telefone avatar token dataNascimento ativo dataCriacao';
    }

    async verificaEmailExiste(Email) {
        return await this._base._model.findOne({
            email: Email
        }, this._projection);
    }

    async verificaCpfExiste(Cpf) {
        return await this._base._model.findOne({
            cpf: Cpf
        }, this._projection);
    }

    async verificaCnpjExiste(Cnpj) {
        return await this._base._model.findOne({
            cnpj: Cnpj
        }, this._projection);
    }

    async autenticar(Email, Senha) {
        let _hashSenha = md5(Senha);
        return await this._base._model.findOne({
            email: Email,
            senha: _hashSenha
        }, this._projection);
    }

    async create(data) {
        let usuarioCriado = await this._base.create(data);
        return this._base._model.findById(usuarioCriado._id, this._projection);
    }

    async update(id, data) {
        let usuarioAtualizado = await this._base.update(id, {
            nome: data.nome,
            cpf: data.cpf,
            cnpj: data.cnpj,
            email: data.email,
            telefone: data.telefone,
            avatar: data.avatar,
            token: data.token,
            dataNascimento: data.dataNascimento,
            ativo: data.ativo,
            dataCriacao: data.dataCriacao,
        });
        return this._base._model.findById(usuarioAtualizado._id, this._projection)
    }

    async getAll() {
        return await this._base._model.find({}, this._projection);
    }

    async getById(id) {
        return await this._base._model.findById(id, this._projection);
    }

    async delete(id) {
        return await this._base.delete(id);
    }

}

module.exports = usuarioRepository;