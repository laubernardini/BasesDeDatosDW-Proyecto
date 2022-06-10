// Imports
const express = require('express')
const app = express()
const sequelize = require('./database/sequelize')
require('./database/associations')
const router = require('./routes/router')

// Settings
const port = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/', router)

// Start server
app.listen(port, () => {
    console.log(`Servidor en puerto ${port}!!`)

    sequelize.sync({ force: false }).then(() => {
        console.log("Nos conectamos exitosamente")
    }).catch((error) => {
        console.log(`Ocurrió el siguiente error: ${error}`)
    })

})