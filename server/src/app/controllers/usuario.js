'use strict'

import User from '../models/usuario.js'

class usuarioController {
	async show(req, res) {
		let usuario = await usuario.findByPk(req.params.id)
		return res.json(usuario)
	}

	async index(req, res) {
		const usuarios = await usuario.findAll()
		return res.json(usuarios)
	}

	async store(req, res) {
		const body = {
			...req.body
		}

		return usuario.create(body)
			.then(createdUser => res.status(200).json({ createdUser }))
			.catch(error => {
				console.error({ error })
				return res.status(400).json({ errorMessage: error.message })
			})
	}

	async update(req, res) {
		let usuario = await usuario.findByPk(req.params.id)
		usuario = await usuario.update(req.body)
		return res.json(usuario)
	}

	async delete(req, res) {
		let usuario = await usuario.findByPk(req.params.id)
		usuario = await usuario.destroy(req.body)
		return res.json(usuario)
	}
}

export default new usuarioController()