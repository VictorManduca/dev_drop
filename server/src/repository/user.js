import models from '../models'

export async function saveUser(payload) {
  return await models.usuario.create(payload)
}

export async function allUsers() {
  return await models.usuario.findAll()
}

export async function oneUser(params) {
  return await models.usuario.findOne({ where: params })
}

export async function updateUser(payload, params) {
  return await models.usuario.update(payload, { where: params })
}

export async function deleteUser(params) {
  return await models.usuario.destroy({ where: params })
}
