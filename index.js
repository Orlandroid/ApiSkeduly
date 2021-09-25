const express = require("express")
const PORT = process.env.PORT || 5000
const app = express()
const db = require('./database/db')

app.use(express.urlencoded({extended:true}))
app.use(express.json())


/***This line of code is for use ejs motor engine */
app.set('view engine', 'ejs');

const alumno = require('./routes/alumnos')
const sucursal = require('./routes/sucursales')
const servicios = require('./routes/servicios')

app.use(alumno)
app.use(sucursal)
app.use(servicios)

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('inicio.ejs')
})

app.get('/matricula/:id', function(peticion, respuesta) {
  respuesta.render('matricula.ejs', {
      id : peticion.params.id
  });
})

app.get("/home",(req,res) =>{
  res.render('sucursal.ejs')
})

app.get('/home2', (req, res) => {
  res.sendFile(__dirname +'/index.html')
})


app.get('/hola',(req,res) =>{
  res.render('servicios')
})

app.listen(PORT, function () {
  console.log(`Express server listening on port http://localhost:${PORT}`)
})