// Imports
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

// Model definition
class Localidad extends Model {}

Localidad.init({
    nombre: DataTypes.STRING
}, {
    sequelize,
    tableName: "localidades",
    modelName: "localidad"
})

// Export
module.exports = Localidad