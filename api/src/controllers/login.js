const prisma = require('../db/')

exports.loginDoctors = (async (req, res) => {
    const { email, password } = req.body
  
    try {

        if (!email || !password) {
            res.status(400).send({ msg: 'Usuario y contraseña son Requeridos' })
            return
        }
        const emailExiste = await prisma.doctors.findUnique({
            where: {
                email: email
            }
        })
        
        if(!emailExiste){
            res.status(400).send({ msg: 'Email no  Existe ' })
            return
        }else {
            const passworerror = emailExiste.password
            if (passworerror !=password) {
                res.status(400).send({ msg: 'passwor incorrecto  ' })
                return
            }else {
                res.status(200).send({ msg: 'ingreso al Sistema ok ' })
            }
        }
        

           

    } catch (error) {

    }


})
exports.loginPatiens = (async (req, res) => {
    const { email, password } = req.body
  
    try {

        if (!email || !password) {
            res.status(400).send({ msg: 'Usuario y contraseña son Requeridos' })
            return
        }
        const emailExiste = await prisma.patients.findUnique({
            where: {
                email: email
            }
        })
        
        if(!emailExiste){
            res.status(400).send({ msg: 'Email no  Existe ' })
            return
        }else {
            const passworerror = emailExiste.password
            if (passworerror !=password) {
                res.status(400).send({ msg: 'passwor incorrecto  ' })
                return
            }else {
                res.status(200).send({ msg: 'ingreso al Sistema ok ' })
            }
        }

    } catch (error) {

    }
   
})