const { PrismaClient } = require("@prisma/client")

/* const prisma = require('../db/') */
const prisma = new PrismaClient()


exports.listarPacientes = async(req, res)=>{
  
    try {
      const allPacient =    await prisma.patiens.findMany({})
      res.status(200).send(allPacient)
    } catch (error) {
      console.log(error)
    }
  }