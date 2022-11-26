/* const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient() */

const prisma = require("../db/");

/**
 *
 * @description 'Crud Pacientes'
 * @author Manuel Romero
 * @fecha 011-2022
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

  try {
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
    res.status(200).send({ msg: 'Patiens add Susccess' })

  } catch (error) {
    console.log("post Patiens failed", error)
    res.status(400).send("post Patiens failed", error)
  }

}


exports.updatePatien = ('/:id', async (req, res) => {

  try {
    const idpatiens = Number(req.query.id)
    const { dni, firstname, lastname, email, password, phone } = req.body

    const updatePatien = await prisma.patiens.update({
      where: {
        id: idpatiens
      },
      data: {
        dni,
        firstname,
        lastname,
        email,
        password,
        phone
      }
    })

    res.status(200).send(updatePatien)


  } catch (error) {
    console.log("update Patiens failed", error)
    res.status(400).send("update Patiens failed", error)

  }

})


exports.deletePatiens = ('/:id', async (req, res) => {
  try {
    const idPatiens = Number(req.query.id)
    const deletePatien = await prisma.patiens.update({

      where: {
        id: idPatiens
      },
      data: {
        status: false
      }
    })
    res.send(deletePatien)

  } catch (error) {
    console.log("delete Patiens failed", error)
    res.status(400).send("delete Patiens failed", error)

  }



})