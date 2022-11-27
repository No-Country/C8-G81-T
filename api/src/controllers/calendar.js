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

exports.addCalendar = async (req,res)=>{
const {doctorId,date} = req.body 

const postcalendar = await prisma.calendar.create({
    data:{
        doctorId,
        date:date

    }
})

  
    res.status(200).json(postcalendar)




}