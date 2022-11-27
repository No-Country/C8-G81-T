const prisma =require('../db/index')

exports.getAllCalendar = async(req,res)=>{
    const id_doctor =Number(req.query.id) 
    
   const getAllCalendar = await prisma.calendar.findMany({
            where:{
                doctorId:id_doctor
            },
            include:{
                doctor:true
            }
            
   })
   res.status(200).send(getAllCalendar)

}