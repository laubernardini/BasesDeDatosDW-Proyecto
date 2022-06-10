// Imports
const Region = require('./models/Region')
const Provincia = require('./models/Provincia')
const Localidad = require('./models/Localidad')
const Empleado = require('./models/Empleado')

// Associations definition
Region.hasMany(Provincia)
Provincia.belongsTo(Region)

Provincia.hasMany(Localidad, { foreignKey: "provinciaId" })
Localidad.belongsTo(Provincia, { foreignKey: "provinciaId" })

Localidad.hasMany(Empleado)
Empleado.belongsTo(Localidad)