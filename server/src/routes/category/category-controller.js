'use strict'

import * as callback from '../services/callback'
import { validate } from '../services/functions'
import { saveCategory, allCategories, oneCategory, updateCategory, deleteCategory } from '../../repository/category'
import CategorySchema from '../schemas/category-schema.json'

export async function create(req, res, next) {
	try {
		const body = { ...req.body }

		const validator = validate(CategorySchema, body)
		if (validator !== true)
			return callback.badRequest(res, validator)

		const Category = await saveCategory(body)

		return callback.created(res, Category.dataValues.id)
	} catch (error) {
		return callback.badRequest(res, error.message)
	}
}

export async function all(req, res, next) {
	try {
		const categories = await allCategories()

		if (categories.length == 0)
			return callback.withData(res, [])

		return callback.withData(res, categories)
	} catch (error) {
		return callback.badRequest(res, error.message)
	}
}

export async function one(req, res, next) {
	try {
		const { id } = req.params
		const Category = await oneCategory({ id: id })

		if (!Category)
			return callback.withData(res, [])

		return callback.withData(res, Category.dataValues)
	} catch (error) {
		return callback.badRequest(res, error.message)
	}
}

export async function update(req, res, next) {
	try {
		const { id } = req.params
		const body = { ...req.body }

		const validator = validate(CategorySchema, body)
		if (validator !== true)
			return callback.badRequest(res, validator)

		await updateCategory(body, { id: id })
		return callback.emptyOk(res)
	} catch (error) {
		return callback.badRequest(res, error.message)
	}
}

export async function destroy(req, res, next) {
	try {
		const { id } = req.params

		await deleteCategory({ id: id })
		return callback.emptyOk(res)
	} catch (error) {
		return callback.badRequest(res, error.message)
	}
}