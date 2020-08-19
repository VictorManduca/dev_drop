'use strict'

import Sequelize from 'sequelize'

import databaseConfig from '../config/database.js'
import usuario from '../app/models/usuario.js'

const models = [usuario]

class Database {
	constructor() {
		this.init()
	}

	init() {
		console.info({ databaseConfig })
		this.connection = new Sequelize(databaseConfig)

		models.map(model => model.init(this.connection))
	}
}

export default new Database()