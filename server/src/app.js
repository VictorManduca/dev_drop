import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import logger from 'morgan'

import router from './routes'

const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json({limit: '50mb'}))
app.use(express.json())
app.use(router)

export default app