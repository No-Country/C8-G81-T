const contoladorPacientes = require('../controllers/pacientes')

module.exports = (app)=>{
  app
  .route('/pacientes')
  .get(contoladorPacientes.listarPacientes)
  .post(contoladorPacientes.addpacient)
}