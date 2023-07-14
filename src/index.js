const express = require('express')
const employeesRouter = require('./routers/employees.routes')
const { PORT } = require('./config')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Server is running')
})

app.use(employeesRouter)

app.listen(PORT, () => {
  console.log(`Runing app at http://localhost:${PORT}`)
})
