import express from 'express'

const routes = express.Router()

import usuarioController from './app/controllers/usuario.js'

routes.get('/usuario', usuarioController.index)
routes.get('/usuario/:id', usuarioController.show)
routes.post('/usuario', usuarioController.store)
routes.put('/usuario/:id', usuarioController.update)
routes.delete('/usuario/:id', usuarioController.destroy)

export default routes