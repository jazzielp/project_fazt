const { pool } = require('../db')

const getEmployees = async (req, res) => {
  const result = await pool.query('SELECT * FROM employees')
  res.json(result[0])
}

const getOneEmployees = async (req, res) => {
  const { id } = req.params
  const result = await pool.query('SELECT * FROM employees WHERE id = ?', [id])
  res.json(result[0])
}

const postEmployees = async (req, res) => {
  const { firstName, lastName, salary } = req.body
  await pool.query('INSERT INTO employees (firstname, lastname, salary) VALUES (?,?,?);', [firstName, lastName, salary])
  res.send('Create employee')
}

const updateEmployees = async (req, res) => {
  const { id } = req.params
  const { firstName } = req.body
  await pool.query('UPDATE employees SET firstName = ? WHERE id = ?;', [firstName, id])
  res.send('Update employee')
}

const deleteEmployees = async (req, res) => {
  const { id } = req.params
  await pool.query('DELETE FROM employees WHERE id = ?;', [id])
  res.send('Delete employee')
}

module.exports = { getEmployees, postEmployees, updateEmployees, deleteEmployees, getOneEmployees }
