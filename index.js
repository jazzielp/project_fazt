const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/employees', (req, res) => {
  res.send('Employees list')
})

app.post('/employees', (req, res) => {
  res.send('Create employee')
})

app.put('/employees/:id', (req, res) => {
  res.send('Update employee')
})

app.delete('/employees/:id', (req, res) => {
  res.send('Delete employee')
})

app.listen(port, () => {
  console.log(`Runing app at http://localhost:${port}`)
})
