const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const db = mysql.createPool({
  host: 'localhost',
  user: 'MYSQL_USER',
  password: 'MYSQL_PASSWORD',
  database: 'libros',
})

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Soy del Backend y Estoy ejecutando desde NodeJS')
})

app.get('/get', (req, res) => {
  const consulta = 'SELECT * FROM libro_criticas'
  db.query(consulta, (err_db, resultado_consulta) => {
    res.send(resultado_consulta)
  })
})
