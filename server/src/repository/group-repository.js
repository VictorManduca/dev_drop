import models from '../models'

export async function saveGroup(payload) {
  return await models.grupo.create({
    UsuarioID: payload.usuarioId,
    PastaID: payload.pastaId,
    PermissaoID: payload.permissaoId,
    Nome: payload.nome
  })
}

export async function allGroups() {
  return await models.grupo.findAll()
}

export async function oneGroup(params) {
  return await models.grupo.findOne({ where: params })
}

export async function updateGroup(payload, params) {
  return await models.grupo.update(
    {
      UsuarioID: payload.usuarioId,
      PastaID: payload.pastaId,
      PermissaoID: payload.permissaoId,
      Nome: payload.nome
    },
    { where: params }
  )
}

export async function deleteGroup(params) {
  return await models.grupo.destroy({ where: params })
}
