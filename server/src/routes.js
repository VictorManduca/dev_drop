import express from 'express'

import * as user from './routes/user/user-controller'
import * as permission from './routes/permission/permission-controller'
import * as category from './routes/category/category-controller'
import * as file from './routes/file/file-controller'
import * as folder from './routes/folder/folder-controller'
import * as group from './routes/group/group-crontroller'

const router = express.Router()

router.post('/drop/user', user.create)
router.get('/drop/user', user.all)
router.post('/drop/user/login', user.login)
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
router.get('/drop/file/all/user/:userId/folder/:folderId', file.all)
router.get('/drop/file/:id', file.one)
router.put('/drop/file/:id', file.update)
router.delete('/drop/file/:id', file.destroy)

router.post('/drop/folder', folder.create)
router.get('/drop/folder/all/user/:userId', folder.all)
router.get('/drop/folder/:id', folder.one)
router.put('/drop/folder/:id', folder.update)
router.delete('/drop/folder/:id', folder.destroy)

router.post('/drop/group', group.create)
router.get('/drop/group', group.all)
router.get('/drop/group/:id', group.one)
router.put('/drop/group/:id', group.update)
router.delete('/drop/group/:id', group.destroy)

export default router
