// Imports
const express = require('express')
const router = express.Router()
const Provincia = require('../database/models/Provincia')
const Region = require('../database/models/Region')

// CREATE (Crear nueva provincia)
router.post('/', (req, res) => {
    Provincia.create({
        nombre: req.body.nombre
    }).then(provincia => {
        Region.findByPk(req.body.regionId).then(region => {
            provincia.setRegion(region).then(obj => {
                res.json(obj)
            })
        })
    })
})

// READ (Lista de provincias)
router.get('/', (req, res) => {
    Provincia.findAll({
        attributes: ["id", "nombre"],
        include: {
            model: Region,
            attributes: ["nombre"]
        }
    }).then((list) => {
        res.json(list)
    })
})
router.get('/:id', (req, res) => {
    Provincia.findByPk(req.params.id).then((obj) => {
        res.json(obj)
    })
})

// UPDATE
router.put('/:id', (req, res) => {
    Provincia.update({
        nombre: req.body.nombre
    }, {
        where: { // Editar recurso cuando...
            id: req.params.id
        }
    }).then(result => {
        if (req.body.regionId !== undefined) {
            Region.findByPk(req.body.regionId).then(region => {
                Provincia.findByPk(req.params.id).then(provincia => {
                    provincia.setRegion(region).then(() => {
                        res.json(result)
                    })
                })
            })
        } else {
            res.json(result)
        }
    })
})

// DELETE
router.delete('/:id', (req, res) => {
    Provincia.destroy({
        where: { // Eliminar recurso cuando...
            id: req.params.id
        }
    }).then((obj) => {
        res.json(obj)
    })
})

// Export
module.exports = router