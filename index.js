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

app.use(alumno)
app.use(sucursal)

app.get("/estados", (req, res) => {
  res.send(estados)
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


app.post('/hola',(req,res) =>{
  console.log("Hola mundo")
  console.log(req.body)
})

app.listen(PORT, function () {
  console.log(`Express server listening on port http://localhost:${PORT}`)
})