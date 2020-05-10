import { Router } from 'express'

import FilesController from './app/controllers/files'

const router = Router()

router.get('/files', FilesController.index)
router.get('/files/:id', FilesController.show)
router.post('/files', FilesController.store)
router.put('/files/:id', FilesController.update)
router.delete('/files/:id', FilesController.destroy)

export default router
