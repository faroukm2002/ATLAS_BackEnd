import { subjectModel } from "../../../database/models/subject.models.js"
import { AppError } from "../../utils/AppError.js"
import { catchError } from "../../utils/catchError.js"
import { deleteOne } from "../handlers/refactor.js"

const addSubject = catchError(async(req,res,next) => {
    const subject =new subjectModel(req.body)
    await subject.save()
    res.status(201).json({message:"Done",subject})

})
const getAllsubject=catchError(async(req,res,next)=>{
    const subjects= await subjectModel.find()
    // created
    res.status(201).json({message:"Done",subjects})
    
  

    })
  
    const getSubjectByID=catchError(async(req,res,next)=>{

        const subject=await subjectModel.findById(req.params.id)
        res.status(201).json({message:"Done",subject})  
    })
     

const updateSubject= catchError(async(req,res,next)=>{
    const{id}=req.params
    const subject=await subjectModel.findByIdAndUpdate(
        id,
        req.body,
        {new:true}
    )
    !subject &&  next(new AppError('subject not found',404))

      subject &&   res.status(201).json({message:"Done",subject})
}
)


 const deleteSubject= deleteOne(subjectModel,"sSubject")




export {
 addSubject,
 getAllsubject,   
 getSubjectByID,
 updateSubject,
 deleteSubject
}

  