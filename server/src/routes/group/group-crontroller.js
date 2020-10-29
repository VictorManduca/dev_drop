'use strict'

import groupSchema from '../schemas/group-schema.json'
import * as callback from '../services/callback'
import * as groupRepository from '../../repository/group-repository'
import { validate } from '../services/functions'
import { checkIfDataExists } from './group-service'

export async function create(req, res) {
  try {
    const body = { ...req.body }

    const validator = validate(groupSchema, body)
    if (validator !== true) return callback.badRequest(res, validator)

    const dataExists = await checkIfDataExists(body)
    if (dataExists) {
      const folder = await groupRepository.saveGroup(body)

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
    const groups = await groupRepository.allGroups()

    if (groups.length === 0) {
      return callback.withData(res, [])
    }

    return callback.withData(res, groups)
  } catch (error) {
    return callback.badRequest(res, error.message)
  }
}

export async function one(req, res) {
  try {
    const { id } = req.params
    const group = await groupRepository.oneGroup({ id: id })

    if (!group) {
      return callback.withData(res, [])
    }

    return callback.withData(res, group.dataValues)
  } catch (error) {
    return callback.badRequest(res, error.message)
  }
}

export async function update(req, res) {
  try {
    const { id } = req.params
    const body = { ...req.body }

    const validator = validate(groupSchema, body)
    if (validator !== true) {
      return callback.badRequest(res, validator)
    }

    const dataExists = await checkIfDataExists(body)
    if (dataExists) {
      await groupRepository.updateGroup(body, { id: id })
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

    await groupRepository.deleteGroup({ id: id })
    return callback.emptyOk(res)
  } catch (error) {
    return callback.badRequest(res, error.message)
  }
}
