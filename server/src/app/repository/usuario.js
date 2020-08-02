'use strict'

import Usuario from '../models/usuario.js'

class UsuarioRepository {
  create(payload) {
    return Usuario
      .create({
        nome: payload.nome,
        email: payload.email,
        senha: payload.senha,
        token: payload.token
      })
  }
}

export default new UsuarioRepository()