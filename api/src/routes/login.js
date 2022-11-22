const controllersLogin = require('../controllers/login')
module.exports = (app) =>{
/* login patiens */
    app.
    route('/login/patiens')
    .post(controllersLogin.loginPatiens)
    /* login para Doctor */
    app. 
    route('/login/doctors')
    .post(controllersLogin.loginDoctors)
}