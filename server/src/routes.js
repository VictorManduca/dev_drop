import express from 'express'

import * as user from './routes/user/user-controller'
import * as permission from './routes/permission/permission-controller'
import * as category from './routes/category/category-controller'

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

router.post('/drop/category', category.create)
router.get('/drop/category', category.all)
router.get('/drop/category/:id', category.one)
router.put('/drop/category/:id', category.update)
router.delete('/drop/category/:id', category.destroy)

export default router