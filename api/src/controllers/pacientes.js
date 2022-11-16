exports.listarPacientes = (req, res)=>{
  
    try {
      res.send({
        msj: "Usuarios ok"
      })
    } catch (error) {
      ServicioError('US001')
    }
  }