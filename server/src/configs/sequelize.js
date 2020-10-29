require('dotenv').config()

module.exports = {
  username: process.env.DB_USER,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  define: {
    timestamps: false
  }
}
