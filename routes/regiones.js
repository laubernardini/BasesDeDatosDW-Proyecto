// Imports
const express = require('express')
const router = express.Router()
const Region = require('../database/models/Region')
const Provincia = require('../database/models/Provincia')

// CREATE (Crear nueva region)
router.post('/', (req, res) => {
    Region.create({
        nombre: req.body.nombre
    }).then((obj) => {
        res.json(obj)
    })
})

// READ (Lista de regiones)
router.get('/', (req, res) => {
    Region.findAll({
        attributes: ["id", "nombre"],
        include: {
            model: Provincia,
            attributes: ["nombre"]
        }
    }).then((list) => {
        res.json(list)
    })
})
router.get('/:id', (req, res) => {
    Region.findByPk(req.params.id).then((obj) => {
        res.json(obj)
    })
})

// UPDATE
router.put('/:id', (req, res) => {
    Region.update({
        nombre: req.body.nombre
    }, {
        where: { // Editar recurso cuando...
            id: req.params.id
        }
    }).then((obj) => {
        res.json(obj)
    })
})

// DELETE
router.delete('/:id', (req, res) => {
    Region.destroy({
        where: { // Eliminar recurso cuando...
            id: req.params.id
        }
    }).then((obj) => {
        res.json(obj)
    })
})


// Export
module.exports = router