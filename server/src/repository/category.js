import models from '../models'

export async function saveCategory(payload) {
	return await models.tipo_categoria.create(payload)
}

export async function allCategories() {
	return await models.tipo_categoria.findAll()
}

export async function oneCategory(params) {
	return await models.tipo_categoria.findOne({ where: params })
}

export async function updateCategory(payload, params) {
	return await models.tipo_categoria.update(payload, { where: params })
}

export async function deleteCategory(params) {
	return await models.tipo_categoria.destroy({ where: params })
}