const pacientes = require('./pacientes')
const doctors = require('./doctor')
const login =require('./login')
const calendar = require('./calendar')


module.exports = (app) => {
  pacientes(app)
  doctors(app)
  login(app)
  calendar(app)

};
