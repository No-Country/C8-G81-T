const pacientes = require('./pacientes')
const doctors = require('./doctor')

module.exports = (app) => {
  pacientes(app)
  doctors(app)
 
};
