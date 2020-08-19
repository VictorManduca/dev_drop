import dotenv from 'dotenv'
dotenv.config()

module.exports = {
	dialect: 'mysql',
	host: process.env.db_host,
	username: process.env.db_username,
	password: process.env.db_password,
	database: process.env.db_name
}