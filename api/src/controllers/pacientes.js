/* const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient() */

const prisma = require("../db/");

/**
 *
 * @description ' Listar todos los pacientes'
 * @author Manuel Romero
 * @param {mostrar respuesta} res
 * @param { datos del cliente recibidos por body} req
 */

exports.listarPacientes = async (req, res) => {
  try {
    const allPacient = await prisma.patients.findMany({});
    res.status(200).send(allPacient);
  } catch (error) {
    console.log(error);
  }
};

exports.addpacient = async (req, res) => {
  const { dni, firstname, lastname, email, password, phone } = req.body;

  const addPatien = await prisma.patients.create({
    data: {
      dni,
      firstname,
      lastname,
      email,
      password,
      phone
    }

  })
  res.status(200).send({msg:'Patiens add Susccess'})

}


exports.updatePatien = ('/:id', async (req,res)=>{
  const idpatiens = Number(req.query.id)
  const { dni, firstname, lastname, email, password, phone } = req.body

  const updatePatien = await prisma.patiens.update({
      where:{
        id:idpatiens
      },
      data:{
        dni,
        firstname,
        lastname,
        email,
        password,
        phone
      }
  })

res.status(200).send(updatePatien)

})

   
