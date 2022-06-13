// Imports
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

// Model definition
class Empleado extends Model {}

Empleado.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: DataTypes.STRING(8),
        allowNull: false,
        validate: {
            min: 6
        }
    },
    salario: {
        type: DataTypes.DECIMAL(6, 2),
        allowNull: true
    },
    telefono: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    tableName: "empleados",
    modelName: "empleado"
})

// Export
module.exports = Empleado