import dotenv from 'dotenv'

import app from './app'
dotenv.config()

const port = process.env.PORT

const listener = app
  .listen(port, _ => console.info(`Server running on the port ${port}`))
  .on('error', error => console.error(`on error handler: ${error}`))

process.on('uncaughtException', error => console.error(`process.on handler: ${error}`))

export default listener
