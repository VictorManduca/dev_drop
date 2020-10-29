import models from '../models'

export async function savePermission(payload) {
  return await models.permissao.create(payload)
}

export async function allPermissions() {
  return await models.permissao.findAll()
}

export async function onePermission(params) {
  return await models.permissao.findOne({ where: params })
}

export async function updatePermission(payload, params) {
  return await models.permissao.update(payload, { where: params })
}

export async function deletePermission(params) {
  return await models.permissao.destroy({ where: params })
}
