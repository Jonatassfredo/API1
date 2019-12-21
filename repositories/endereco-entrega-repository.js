require("../models/endereco-entrega-model");
const base = require("../bin/base/repository-base");

class enderecoEntregaRepository {
  constructor() {
    this._base = new base("endereco");
  }

  async create(data) {
    return await this._base.create(data);
  }

  async update(id, data) {
    return await this._base.update(id, data);
  }

  async getAll(_idUsuario) {
    return await this._base._model.find({
      idUsuario: _idUsuario
    });
  }

  async getById(id) {
    return await this._base.getById(id);
  }

  async getByIdUsuario(id) {
    return await this._base._model.find({
      idUsuario: id
    });
  }

  async getByOperadorId(id) {
    return await this._base._model.find({
      operadorId: id
    });
  }

  async getByIdUsuario(id) {
    return await this._base._model.find({
      idUsuario: id
    });
  }

  async delete(id) {
    return await this._base.delete(id);
  }
}

module.exports = enderecoEntregaRepository;
