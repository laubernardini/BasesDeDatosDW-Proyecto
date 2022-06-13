const express = require('express')
const router = express.Router()
const Empleado = require('../database/models/Empleado')
const Localidad = require('../database/models/Localidad')

// CREATE (Crear nueva empleado)
router.post('/', (req, res) => {
    Empleado.create({
        nombre: req.body.nombre,
        dni: req.body.dni,
        salario: req.body.salario,
        telefono: req.body.telefono
    }).then(empleado => {
        Localidad.findByPk(req.body.localidadId).then(localidad => {
            empleado.setLocalidad(localidad).then(obj => {
                res.json(obj)
            })
        })
    })
})

// READ (Lista de empleados)
router.get('/', (req, res) => {
    Empleado.findAll().then((list) => {
        res.json(list)
    })
})
router.get('/:id', (req, res) => {
    Empleado.findByPk(req.params.id).then((obj) => {
        res.json(obj)
    })
})

// UPDATE
router.put('/:id', (req, res) => {
    Empleado.update({
        nombre: req.body.nombre,
        dni: req.body.dni,
        salario: req.body.salario,
        telefono: req.body.telefono
    }, {
        where: { // Editar recurso cuando...
            id: req.params.id
        }
    }).then(result => {
        if (req.body.localidadId !== undefined) {
            Localidad.findByPk(req.body.localidadId).then(localidad => {
                Empleado.findByPk(req.params.id).then(empleado => {
                    empleado.setLocalidad(localidad).then(() => {
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
    Empleado.destroy({
        where: { // Eliminar recurso cuando...
            id: req.params.id
        }
    }).then((obj) => {
        res.json(obj)
    })
})

// Export
module.exports = router