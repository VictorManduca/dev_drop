'use strict'

export function badRequest(res, error) {
	return res.status(400).json({ errorMessage: error }).send()
}

export function created(res, id) {
	return res.status(201).json({ id: id }).send()
}

export function withData(res, data) {
	return res.status(200).json({ data }).send()
}

export function emptyOk(res) {
	return res.status(200).send()
}