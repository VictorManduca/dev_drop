import express from 'express'

import * as user from './routes/user/user-controller'
import * as permission from './routes/permission/permission-controller'

const router = express.Router()

router.post('/drop/user', user.create)
router.get('/drop/user', user.all)
router.get('/drop/user/:id', user.one)
router.put('/drop/user/:id', user.update)
router.delete('/drop/user/:id', user.destroy)

router.post('/drop/permission', permission.create)
router.get('/drop/permission', permission.all)
router.get('/drop/permission/:id', permission.one)
router.put('/drop/permission/:id', permission.update)
router.delete('/drop/permission/:id', permission.destroy)

export default router