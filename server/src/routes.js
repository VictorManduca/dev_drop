'use strict'

import express from 'express'

import usuarioController from './app/controllers/usuario.js'

const routes = express.Router()

routes.get('/usuario', usuarioController.index)
routes.get('/usuario/:id', usuarioController.show)
routes.post('/usuario', usuarioController.store)
routes.put('/usuario/:id', usuarioController.update)
routes.delete('/usuario/:id', usuarioController.delete)

export default routes