const express = require("express")
const PORT = process.env.PORT || 5000
const app = express()
const db = require('./database/db')

app.use(express.urlencoded({extended:true}))
app.use(express.json())


/***This line of code is for use ejs motor engine */
app.set('view engine', 'ejs');

const sucursal = require('./routes/sucursales')
const servicios = require('./routes/servicios')

app.use(sucursal)
app.use(servicios)

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('inicio.ejs')
})

app.listen(PORT, function () {
  console.log(`Express server listening on port http://localhost:${PORT}`)
})