import dotenv from 'dotenv'
dotenv.config()

export default {
  type: 'mysql',
  host: process.env.HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: ['src/database/entity/*.ts'],
  migrations: ['src/database/migration/*.ts'],
  subscribers: ['src/database/subscriber/*.ts']
}
