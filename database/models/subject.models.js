import { Schema,Types,model } from "mongoose"

const subjectSchema = new Schema({
    
    name:{
            type:String,
            required:true,
            trim:true,
            unique:true,
    },
   date:{
        type:Date,
},  
  teacher:{
  type:Schema.ObjectId,
  ref:"teacher",
  required:true,
},
// totalstudent:{
//     type:Schema.ObjectId,
//     ref:"student",
//     required:true,
//   },
// totalgrade:{
//     type:Schema.ObjectId,
//     ref:"student",
//     required:true,
//   },

 
},{timeStamp:true});

export const subjectModel=model('subject',subjectSchema)
 