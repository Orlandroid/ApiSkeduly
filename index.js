const express = require("express")
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 5000
const app = express()
const db = require('./database/db')

app.use(express.urlencoded({extended:true}))
app.use(express.json())


/***This line of code is for use ejs motor engine */
app.set('view engine', 'ejs');

const alumno = require('./routes/alumnos')
app.use(alumno)

const estados = {
  "estados" : ["Ciudad de México",
  "Aguascalientes",
  "Baja California",
  "Baja California Sur",
  "Campeche",
  "Coahuila de Zaragoza",
  "Colima",
  "Chiapas",
  "Chihuahua",
  "Durango",
  "Guanajuato",
  "Guerrero",
  "Hidalgo",
  "Jalisco",
  "México",
  "Michoacán de Ocampo",
  "Morelos",
  "Nayarit",
  "Nuevo León",
  "Oaxaca",
  "Puebla",
  "Querétaro",
  "Quintana Roo",
  "San Luis Potosí",
  "Sinaloa",
  "Sonora",
  "Tabasco",
  "Tamaulipas",
  "Tlaxcala",
  "Veracruz de Ignacio de la Llave",
  "Yucatán",
  "Zacatecas"]
}


app.get("/estados", (req, res) => {
  res.send(estados)
})

app.get('/matricula/:id', function(peticion, respuesta) {
  respuesta.render('matricula.ejs', {
      id : peticion.params.id
  });
})

app.get("/home",(req,res) =>{
  res.render('inicio.ejs')
})

app.get('/home2', (req, res) => {
  res.sendFile(__dirname +'/index.html')
})


app.post('/hola',(req,res) =>{
  console.log("Hola mundo")
  console.log(req.body)
})

app.listen(PORT, function () {
  console.log(`Express server listening on port http://localhost:${PORT}`)
})