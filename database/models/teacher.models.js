import { Schema,Types,model } from "mongoose"

const teacherSchema = new Schema({
    
    // personal information
    firstname:{
            type:String,
            required:true,
            trim:true,
    },
   lastname:{
        type:String,
        required:true,
        trim:true,
},  
  email:{
    type:String,
    unique:true,
    required:true,
    trim:true,
},
phone:{
    type:Number,
    unique:true,
    required:true,
    trim:true,
},
Address:{
    type:String,
    required:true,
    trim:true,
},
image:{
    type:String,
    // required:true,
},
dateOfBirth:{
    type:Date,
    required:true,
    trim:true,
},
placeOfBirth:{
    type:String,
    required:true,
    trim:true,
}, 

// Education Information
university:{
    type:String,
    required:true,
    trim:true,
},
degree:{
    type:String,
    required:true,
    trim:true,
},

city:{
    type:String,
    required:true,
    trim:true,
},
    // ed_qualification_id: {
    //     type: String,
    //     required: true
    // },
    // ed_speciality_id: {
    //     type: String,
    //     required: true
    // },
    // Institute_id: {
    //     type: String
    // },
    // institute: {
    //     type: String
    // },
    // reference_no: {
    //     type: String
    // },

    started_date: {
        type: Date
    },
    finished_date: {
        type: Date
    },
 
});

export const teacherModel=model('teacher',teacherSchema)
 