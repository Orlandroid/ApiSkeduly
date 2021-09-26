const express = require('express')
const router = express.Router()

const servicioController = require('../controllers/servicioController')

router.get('/api/servicios',servicioController.mostrar)

router.post('/createServicio',servicioController.create)

router.get('/navServicios',(req,res) =>{
    res.render('servicios')
})

module.exports = router