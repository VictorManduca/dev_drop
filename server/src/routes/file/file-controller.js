'use strict'

import * as callback from '../services/callback'
import fileSchema from '../schemas/file-schema.json'
import { validate } from '../services/functions'
import { sanitizeFileResponse, sanitizeFilesResponse } from './file-service'
import { oneUser } from '../../repository/user'
import {
  saveFile,
  allFiles,
  oneFile,
  updateFile,
  deleteFile
} from '../../repository/file-repository'

export async function create(req, res, next) {
  try {
    const body = { ...req.body }

    const validator = validate(fileSchema, body)
    if (validator !== true) return callback.badRequest(res, validator)

    const checkExistentUser = await oneUser({ id: body.usuarioId })
    if (checkExistentUser) {
      const file = await saveFile(body)

      return callback.created(res, file.dataValues.id)
    } else {
      return callback.badRequest(res, 'User not exist in our database')
    }
  } catch (error) {
    return callback.badRequest(res, error.message)
  }
}

export async function all(req, res, next) {
  try {
    const files = await allFiles()

    if (files.length == 0) {
      return callback.withData(res, [])
    }

    const sanitizedFiles = sanitizeFilesResponse(files)
    return callback.withData(res, sanitizedFiles)
  } catch (error) {
    return callback.badRequest(res, error.message)
  }
}

export async function one(req, res, next) {
  try {
    const { id } = req.params
    const file = await oneFile({ id: id })

    if (!file) {
      return callback.withData(res, [])
    }

    const sanitizedFile = sanitizeFileResponse(file)
    return callback.withData(res, sanitizedFile)
  } catch (error) {
    return callback.badRequest(res, error.message)
  }
}

export async function update(req, res, next) {
  try {
    const { id } = req.params
    const body = { ...req.body }

    const validator = validate(fileSchema, body)
    if (validator !== true) {
      return callback.badRequest(res, validator)
    }

    await updateFile(body, { id: id })
    return callback.emptyOk(res)
  } catch (error) {
    return callback.badRequest(res, error.message)
  }
}

export async function destroy(req, res, next) {
  try {
    const { id } = req.params

    await deleteFile({ id: id })
    return callback.emptyOk(res)
  } catch (error) {
    return callback.badRequest(res, error.message)
  }
}
