import 'reflect-metadata'
import { createConnection } from 'typeorm'

createConnection({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE
})

export default createConnection
