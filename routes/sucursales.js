const express = require('express')
const router = express.Router()

const sucursaleController = require('../controllers/sucursalController')

router.get('/sucursales',sucursaleController.mostrar)

router.post('/createSucursal',sucursaleController.create)

module.exports=router