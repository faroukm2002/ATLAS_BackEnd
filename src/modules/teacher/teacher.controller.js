import { teacherModel } from "../../../database/models/teacher.models.js"
import { AppError } from "../../utils/AppError.js"
import { catchError } from "../../utils/catchError.js"
import { deleteOne } from "../handlers/refactor.js"

const addTeacher = catchError(async(req,res,next) => {
    // let teachers=await teacherModel.findOne({email:req.body.email})
    // if(teachers) return next(new AppError("duplicate email",409))
    const teacher =new teacherModel(req.body)
    await teacher.save()
    res.status(201).json({message:"Done",teacher})

})
const getAllteachers=catchError(async(req,res,next)=>{
    const teachers= await teacherModel.find()
    // created
    res.status(201).json({message:"Done",teachers})
    
  

    })
  
    const getTeacherByID=catchError(async(req,res,next)=>{

        const teacher=await teacherModel.findById(req.params.id)
        res.status(201).json({message:"Done",teacher})  
    })
     

const updateTeacher= catchError(async(req,res,next)=>{
    const{id}=req.params
    const teacher=await teacherModel.findByIdAndUpdate(
        id,
        req.body,
        {new:true}
    )
    !teacher && next(new AppError('teacher not found',404))

      teacher &&   res.status(201).json({message:"Done",teacher})
}
)


 const deleteTeacher= deleteOne(teacherModel,"Teacher")




export {
 addTeacher,
 getAllteachers,   
 getTeacherByID,
 updateTeacher,
 deleteTeacher
}

  