import express from 'express'

import * as user from './routes/user/user-controller'

const router = express.Router()

router.post('/drop/user', user.create)
router.get('/drop/user', user.all)
router.get('/drop/user/:id', user.one)
router.put('/drop/user/:id', user.update)
router.delete('/drop/user/:id', user.destroy)

export default router