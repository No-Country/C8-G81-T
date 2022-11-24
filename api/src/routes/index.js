const pacientes = require('./pacientes')
const doctors = require('./doctor')
const login =require('./login')

module.exports = (app) => {
  pacientes(app)
  doctors(app)
  login(app)
 
};
