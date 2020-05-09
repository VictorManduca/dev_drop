import { Router } from 'express'

import * as filesController from './controllers/files'

const router = Router()

router.get('/', filesController.show)

export default router
