'use strict'

import * as callback from '../services/callback'
import { validate } from '../services/functions'
import models from '../../models'
import userSchema from '../schemas/user-schema.json'

export async function create(req, res, next) {
	const body = { ...req.body }

	const validator = validate(userSchema, body)
	if (validator !== true)
		return callback.badRequest(res, validator)

	const user = await models.usuario.create(body)

	return callback.created(res, user.dataValues.id)
}

export async function all(req, res, next) {
	const users = await models.usuario.findAll()
	return callback.withData(res, users.dataValues)
}