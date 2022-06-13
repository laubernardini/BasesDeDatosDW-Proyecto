// Imports
const express = require('express')
const router = express.Router()
const Provincia = require('../database/models/Provincia')
const Localidad = require('../database/models/Localidad')

// CREATE (Crear nueva localidad)
router.post('/', (req, res) => {
    Localidad.create({
        nombre: req.body.nombre
    }).then(localidad => {
        Provincia.findByPk(req.body.provinciaId).then(provincia => {
            localidad.setProvincium(provincia).then(obj => {
                res.json(obj)
            })
        })
    })
})

// READ (Lista de localidades)
router.get('/', (req, res) => {
    Localidad.findAll().then((list) => {
        res.json(list)
    })
})
router.get('/:id', (req, res) => {
    Localidad.findByPk(req.params.id).then((obj) => {
        res.json(obj)
    })
})

// UPDATE
router.put('/:id', (req, res) => {
    Localidad.update({
        nombre: req.body.nombre
    }, {
        where: { // Editar recurso cuando...
            id: req.params.id
        }
    }).then(result => {
        if (req.body.provinciaId !== undefined) {
            Provincia.findByPk(req.body.provinciaId).then(provincia => {
                Localidad.findByPk(req.params.id).then(localidad => {
                    localidad.setProvincium(provincia).then(() => {
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
    Localidad.destroy({
        where: { // Eliminar recurso cuando...
            id: req.params.id
        }
    }).then((obj) => {
        res.json(obj)
    })
})

// Export
module.exports = router