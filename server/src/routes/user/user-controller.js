'use strict'

import * as callback from '../services/callback'
import { validate } from '../services/functions'
import { saveUser, allUsers, oneUser, updateUser, deleteUser } from '../../repository/user'
import userSchema from '../schemas/user-schema.json'

export async function create(req, res, next) {
	try {
		const body = { ...req.body }

		const validator = validate(userSchema, body)
		if (validator !== true)
			return callback.badRequest(res, validator)

		const checkExistentUser = await oneUser({ email: body.email, senha: body.senha })
		if (checkExistentUser)
			return callback.badRequest(res, 'User already exists')

		const user = await saveUser(body)

		return callback.created(res, user.dataValues.id)
	} catch (error) {
		return callback.badRequest(res, error.message)
	}
}

export async function all(req, res, next) {
	try {
		const users = await allUsers()

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
		const user = await oneUser({ id: id })

		if (!user)
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

		await updateUser(body, { id: id })
		return callback.emptyOk(res)
	} catch (error) {
		return callback.badRequest(res, error.message)
	}
}

export async function destroy(req, res, next) {
	try {
		const { id } = req.params

		await deleteUser({ id: id })
		return callback.emptyOk(res)
	} catch (error) {
		return callback.badRequest(res, error.message)
	}
}