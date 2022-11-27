const controllerCalendar = require('../controllers/calendar')
module.exports = (app)=>{
    app
    .route('/calendar')
    .get(controllerCalendar.getAllCalendar)
}