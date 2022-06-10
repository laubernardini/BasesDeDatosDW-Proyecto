// Imports
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

// Model definition
class Provincia extends Model {}

Provincia.init({
    nombre: DataTypes.STRING
}, {
    sequelize,
    tableName: "provincias",
    modelName: "provincia"
})

// Export
module.exports = Provincia