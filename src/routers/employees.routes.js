const { Router } = require('express')
const { getEmployees, postEmployees, updateEmployees, deleteEmployees, getOneEmployees } = require('../controllers/employees.controller')
const router = Router()

router.get('/employees', getEmployees)

router.get('/employees/:id', getOneEmployees)

router.post('/employees', postEmployees)

router.put('/employees/:id', updateEmployees)

router.delete('/employees/:id', deleteEmployees)

module.exports = router
