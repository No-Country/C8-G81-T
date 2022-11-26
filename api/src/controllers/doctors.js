const prisma = require("../db/index"); //llamo a prisma Client

/* metodo para listar */
exports.getAllDoctors = async (req, res) => {
  try {
    const allDoctors = await prisma.doctors.findMany({});
    res.send(allDoctors);
  } catch (error) {
    res.send(error);
  }
};
/* metodo para Agregar */
exports.addDoctors = async (req, res) => {
  try {
    const { dni, firstname, lastname, specialty, email, password, phone } =
      req.body;
    const addDoctor = await prisma.doctors.create({
      data: {
        dni,
        firstname,
        lastname,
        specialty,
        email,
        password,
        phone,
      },
    });
    res.send({ msg: "add doctors Susccess" });

  } catch (error) {
    console.log("create doctors failed", error)
    res.status(400).send("create doctors failed", error)
  }




};

/* metodo para actualizar */
exports.updateDoctors = ('/:id', async (req, res) => {

  try {
    const idDoctors = Number(req.query.id)
  const { dni, firstname, lastname, specialty, email, password, phone } = req.body;
  const updateDoctros = await prisma.doctors.update({
    where: {
      id: idDoctors
    },
    data: {
      dni,
      firstname,
      lastname,
      specialty,
      email,
      password,
      phone,
    }
  })
  res.status(200).send(updateDoctros)

  } catch (error) {
    console.log("update doctors failed", error)
    res.status(400).send("update doctors failed", error)
  }
  

 
})

exports.deleteDoctors = (':/id', async (req, res) => {
  const idDoctorsDelete = Number(req.query.id)

  const deletedoctor = await prisma.doctors.update({
    where: {
      id: idDoctorsDelete
    },
    data: {
      role: 'OCUCUPIED'
    }
  })
  res.json(deletedoctor)
})