import { teacherModel } from "../../../database/models/teacher.models.js"

const addTeacher = async(req,res,next) => {
    // let teachers=await teacherModel.findOne({email:req.body.email})
    // if(teachers) return next(new AppError("duplicate email",409))
    const teacher =new teacherModel(req.body)
    await teacher.save()
    res.status(201).json({message:"Done",teacher})

}
const getAllteachers= async(req,res,next)=>{
    const teachers= await teacherModel.find()
    // created
    res.status(201).json({message:"Done",teachers})
    
  

    }
  
    const getTeacherByID=async(req,res,next)=>{

        const teacher=await teacherModel.findById(req.params.id)
        res.status(201).json({message:"Done",teacher})  
    }
     

const updateTeacher= async(req,res,next)=>{
    const{id}=req.params
    const teacher=await teacherModel.findByIdAndUpdate(
        id,
        req.body,
        {new:true}
    )
      !teacher && res.status(404).json({message:"teacher not found",}) 

      teacher &&   res.status(201).json({message:"Done",teacher})
}



 const deleteTeacher=  async(req,res,next)=>{
    const{id}=req.params
    const teacher= await teacherModel.findByIdAndDelete(id) //{}


      //!{}==false
    !teacher && next(new AppError(`${name} not found`,404))
   
    teacher &&   res.status(201).json({message:"Done",teacher})
 

  }




export {
 addTeacher,
 getAllteachers,   
 getTeacherByID,
 updateTeacher,
 deleteTeacher
}

  