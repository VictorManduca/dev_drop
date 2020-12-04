'use strict'

import folderSchema from '../schemas/folder-schema.json'
import * as callback from '../services/callback'
import * as folderRepository from '../../repository/folder-repository'
import { validate } from '../services/functions'
import { checkIfDataExists } from './folder-service'

export async function create(req, res) {
  try {
    const body = { ...req.body }

    const validator = validate(folderSchema, body)
    if (validator !== true) return callback.badRequest(res, validator)

    const dataExists = await checkIfDataExists(body)
    if (dataExists) {
      const folder = await folderRepository.saveFolder(body)

      return callback.created(res, folder.dataValues.id)
    } else {
      return callback.badRequest(res, 'Any of those given data does not exist in our database')
    }
  } catch (error) {
    return callback.badRequest(res, error.message)
  }
}

export async function all(req, res) {
  try {
    const { userId } = req.params
    const folders = await folderRepository.allFoldersWhere({ usuarioId: userId })

    if (folders.length === 0) {
      return callback.withData(res, [])
    }

    return await callback.withData(res, folders)
  } catch (error) {
    return await callback.badRequest(res, error.message)
  }
}

export async function one(req, res) {
  try {
    const { id } = req.params
    const folder = await folderRepository.oneFolder({ id: id })

    if (!folder) {
      return callback.withData(res, [])
    }

    return callback.withData(res, folder.dataValues)
  } catch (error) {
    return callback.badRequest(res, error.message)
  }
}

export async function update(req, res) {
  try {
    const { id } = req.params
    const body = { ...req.body }

    const validator = validate(folderSchema, body)
    if (validator !== true) {
      return callback.badRequest(res, validator)
    }

    const dataExists = await checkIfDataExists(body)
    if (dataExists) {
      await folderRepository.updateFolder(body, { id: id })
      return callback.emptyOk(res)
    } else {
      return callback.badRequest(res, 'Any of those given data does not exist in our database')
    }
  } catch (error) {
    return callback.badRequest(res, error.message)
  }
}

export async function destroy(req, res) {
  try {
    const { id } = req.params

    await folderRepository.deleteFolder({ id: id })
    return callback.emptyOk(res)
  } catch (error) {
    return callback.badRequest(res, error.message)
  }
}
