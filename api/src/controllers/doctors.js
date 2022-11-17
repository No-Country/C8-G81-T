const prisma = require('../db/index')


exports.getAllDoctors = async (req, res) => {
    try {
        const allDoctors = await prisma.doctors.findFirst({})
        res.send(allDoctors)
    } catch (error) {
        res.send(error)
    }
}


exports.addDoctors = async (req,res) => {
    const {
        dni,
        firstname,
        lastname,
        specialty,
        email,
        password,
        phone
    } = req.body

const addDoctor = await prisma.doctors.create({
    data:{
        dni,
        firstname,
        lastname,
        specialty,
        email,
        password,
        phone 
    }
})
res.send({msg:'add doctors Susccess'})


}
