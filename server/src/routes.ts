import { Router } from 'express'

import FilesController from './app/controllers/files'
import UserController from './app/controllers/user'

const router = Router()

router.get('/files', FilesController.index)
router.get('/files/:id', FilesController.show)
router.post('/files', FilesController.store)
router.put('/files/:id', FilesController.update)
router.delete('/files/:id', FilesController.destroy)

router.get('/user', UserController.index)
router.get('/user/:id', UserController.show)
router.post('/user', UserController.store)
router.put('/user/:id', UserController.update)
router.delete('/user/:id', UserController.destroy)

export default router
