'use strict'

import * as callback from '../services/callback'
import { validate } from '../services/functions'
import { savePermission, allPermissions, onePermission, updatePermission, deletePermission } from '../../repository/permission'
import PermissionSchema from '../schemas/permission-schema.json'

export async function create(req, res, next) {
	try {
		const body = { ...req.body }

		const validator = validate(PermissionSchema, body)
		if (validator !== true)
			return callback.badRequest(res, validator)

		const Permission = await savePermission(body)

		return callback.created(res, Permission.dataValues.id)
	} catch (error) {
		return callback.badRequest(res, error.message)
	}
}

export async function all(req, res, next) {
	try {
		const Permissions = await allPermissions()

		if (Permissions.length == 0)
			return callback.withData(res, [])

		return callback.withData(res, Permissions)
	} catch (error) {
		return callback.badRequest(res, error.message)
	}
}

export async function one(req, res, next) {
	try {
		const { id } = req.params
		const Permission = await onePermission({ id: id })

		if (!Permission)
			return callback.withData(res, [])

		return callback.withData(res, Permission.dataValues)
	} catch (error) {
		return callback.badRequest(res, error.message)
	}
}

export async function update(req, res, next) {
	try {
		const { id } = req.params
		const body = { ...req.body }

		const validator = validate(PermissionSchema, body)
		if (validator !== true)
			return callback.badRequest(res, validator)

		await updatePermission(body, { id: id })
		return callback.emptyOk(res)
	} catch (error) {
		return callback.badRequest(res, error.message)
	}
}

export async function destroy(req, res, next) {
	try {
		const { id } = req.params

		await deletePermission({ id: id })
		return callback.emptyOk(res)
	} catch (error) {
		return callback.badRequest(res, error.message)
	}
}