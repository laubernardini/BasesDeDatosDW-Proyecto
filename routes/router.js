// Imports
const express = require('express')
const router = express.Router()
const regionesRouter = require('./regiones')
const provinciasRouter = require('./provincias')
const localidadesRouter = require('./localidades')
const empleadosRouter = require('./empleados')

// Routes definition
router.get('/', (request, response) => {
    response.send('Hola, soy un servidor WEB usando router')
})

// Use routers
router.use('/regiones', regionesRouter)
router.use('/provincias', provinciasRouter)
router.use('/localidades', localidadesRouter)
router.use('/empleados', empleadosRouter)

// Export
module.exports = router