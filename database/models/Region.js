// Imports
const { DataTypes, Model } = require('sequelize')
const sequelize = require('../sequelize')

// Model definition
class Region extends Model {}

Region.init({
    nombre: DataTypes.STRING(30)
}, {
    sequelize,
    modelName: "region",
    tableName: "regiones"
})

// Export
module.exports = Region