const express = require('express')
const router = express.Router()

const sucursaleController = require('../controllers/sucursalController')

router.get('/api/sucursales',sucursaleController.mostrar)

router.post('/createSucursal',sucursaleController.create)

router.get("/navSucursal",(req,res) =>{
    res.render('sucursal.ejs')
})

module.exports=router