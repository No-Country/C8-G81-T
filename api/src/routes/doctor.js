const controllersDoctors = require('../controllers/doctors')
module.exports =(app)=>{
    app
    .route('/doctors')
    .get(controllersDoctors.getAllDoctors)
    .post(controllersDoctors.addDoctors)
    .put(controllersDoctors.updateDoctors)
    .delete(controllersDoctors.deleteDoctors)
}