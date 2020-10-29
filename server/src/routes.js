import express from 'express'

import * as user from './routes/user/user-controller'
import * as permission from './routes/permission/permission-controller'
import * as category from './routes/category/category-controller'
import * as file from './routes/file/file-controller'
import * as folder from './routes/folder/folder-controller'

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

router.post('/drop/file', file.create)
router.get('/drop/file', file.all)
router.get('/drop/file/:id', file.one)
router.put('/drop/file/:id', file.update)
router.delete('/drop/file/:id', file.destroy)

router.post('/drop/folder', folder.create)
router.get('/drop/folder', folder.all)
router.get('/drop/folder/:id', folder.one)
router.put('/drop/folder/:id', folder.update)
router.delete('/drop/folder/:id', folder.destroy)

export default router
