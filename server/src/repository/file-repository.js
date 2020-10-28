import models from '../models'

export async function saveFile(payload) {
  return await models.arquivo.create({
    UsuarioID: payload.usuarioId,
    eFavorito: payload.eFavorito,
    Nome: payload.nome,
    Arquivo: payload.arquivo
  })
}

export async function allFiles() {
  return await models.arquivo.findAll()
}

export async function oneFile(params) {
  return await models.arquivo.findOne({ where: params })
}

export async function updateFile(payload, params) {
  return await models.arquivo.update(
    {
      UsuarioID: payload.usuarioId,
      eFavorito: payload.eFavorito,
      Nome: payload.nome,
      Arquivo: payload.arquivo
    },
    { where: params }
  )
}

export async function deleteFile(params) {
  return await models.arquivo.destroy({ where: params })
}
