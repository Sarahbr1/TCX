import mongoose from 'mongoose'

const patientSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"username is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        validate:{
            validator:validator.isEmail,
            message:"invalid email address"
        }
    },
    phoneNumber:{
        type:String,
        required:[true,"email is required"],
    },
    medicenID:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"medicine"
        }
    ]
})