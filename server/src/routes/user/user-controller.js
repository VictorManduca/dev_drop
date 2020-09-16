'use strict'

import * as callback from '../services/callback'
import { validate } from '../services/functions'
import models from '../../models'
import userSchema from '../schemas/user-schema.json'

export async function create(req, res, next) {
	try {
		const body = { ...req.body }

		const validator = validate(userSchema, body)
		if (validator !== true)
			return callback.badRequest(res, validator)

		const user = await models.usuario.create(body)

		return callback.created(res, user.dataValues.id)
	} catch (error) {
		return callback.badRequest(res, error.message)
	}
}

export async function all(req, res, next) {
	try {
		const users = await models.usuario.findAll()

		if (users.length == 0)
			return callback.withData(res, [])

		return callback.withData(res, users)
	} catch (error) {
		return callback.badRequest(res, error.message)
	}
}

export async function one(req, res, next) {
	try {
		const { id } = req.params
		const user = await models.usuario.findOne({ where: { id: id } })

		if (!user.dataValues)
			return callback.withData(res, [])

		return callback.withData(res, user.dataValues)
	} catch (error) {
		return callback.badRequest(res, error.message)
	}
}

export async function update(req, res, next) {
	try {
		const { id } = req.params
		const body = { ...req.body }

		const validator = validate(userSchema, body)
		if (validator !== true)
			return callback.badRequest(res, validator)

		await models.usuario.update(body, { where: { id: id } })
		return callback.emptyOk(res)
	} catch (error) {
		return callback.badRequest(res, error.message)
	}
}

export async function destroy(req, res, next) {
	try {
		const { id } = req.params

		await models.usuario.destroy({ where: { id: id } })
		return callback.emptyOk(res)
	} catch (error) {
		return callback.badRequest(res, error.message)
	}
}