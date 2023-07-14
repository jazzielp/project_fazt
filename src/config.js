const { config } = require('dotenv')
config()

const PORT = parseInt(process.env.PORT) || 3000
const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_USER = process.env.DB_USER || 'root'
const DB_PASSWORD = process.env.DB_PASSWORD || 'root'
const DB_NAME = process.env.DB_NAME || 'employees'
const DB_PORT = parseInt(process.env.DB_PORT) || 3306

console.log(PORT)
console.log(DB_HOST)
console.log(DB_USER)
console.log(DB_PASSWORD)
console.log(DB_NAME)
console.log(DB_PORT)

module.exports = { PORT, DB_PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME }
