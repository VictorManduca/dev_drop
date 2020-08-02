'use strict'

import UsuarioRepository from '../repository/usuario.js'

class Usuario {
  index(req, res) {
    return res.status(200).send()
  }

  show(req, res) {
    return res.status(200).send()
  }

  store(req, res) {
    const body = {
      ...req.body
    }

    return UsuarioRepository.create(body)
  }

  update(req, res) {
    return res.status(200).send()
  }

  destroy(req, res) {
    return res.status(200).send()
  }
}

export default new Usuario()