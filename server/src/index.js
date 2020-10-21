import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import logger from 'morgan'

import router from './routes'

const port = process.env.PORT
const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(router)

const listener = app.listen(port, _ => console.info(`Server running on the port ${ port }`))
  .on('error', error => console.error(`on error handler: ${ error }`))

process.on('uncaughtException', error => console.error(`process.on handler: ${ error }`))

export default listener