import dotenv from 'dotenv'
dotenv.config()

import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

import routes from './routes.js'

const app = express()
const port = process.env.port

app.use(morgan('dev'))
app.use(cors())

app.use(
  bodyParser.json({
    limit: '20mb'
  })
)

app.use(
  bodyParser.urlencoded({
    limit: '20mb',
    parameterLimit: 100000,
    extended: true
  })
)

app.use(express.json())
app.use(routes)

const listener = app.listen(port, _ => console.info(`Server running on the port ${ port }`))
  .on("error", err => console.info(`on error handler: ${ err }`));

process.on("uncaughtException", err => console.info(`process.on handler: ${ err }`))

module.exports = listener;