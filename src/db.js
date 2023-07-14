const mysql = require('mysql2/promise')
const { createPool } = mysql
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = require('./config')

const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_NAME
})

module.exports = { pool }
