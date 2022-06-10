// Imports
const { Sequelize } = require('sequelize')
const { sqlite } = require('./config')

// Definición de la conexión
const sequelize = new Sequelize(sqlite.db)

// Export
module.exports = sequelize