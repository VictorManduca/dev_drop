import models from '../models'

export async function saveFolder(payload) {
  return await models.pasta.create({
    UsuarioID: payload.usuarioId,
    ArquivoID: payload.arquivoId,
    TipoCategoriaID: payload.tipoCategoriaId,
    Nome: payload.nome
  })
}

export async function allFolders() {
  return await models.pasta.findAll()
}

export async function oneFolder(params) {
  return await models.pasta.findOne({ where: params })
}

export async function updateFolder(payload, params) {
  return await models.pasta.update(
    {
      UsuarioID: payload.usuarioId,
      ArquivoID: payload.arquivoId,
      TipoCategoriaID: payload.tipoCategoriaId,
      Nome: payload.nome
    },
    { where: params }
  )
}

export async function deleteFolder(params) {
  return await models.pasta.destroy({ where: params })
}
