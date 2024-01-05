import mongoose from 'mongoose'

const patientSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"username is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
    },
    phoneNumber:{
        type:String,
        required:[true,"email is required"],
    },
    medicenID:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"medecines"
        }
    ]
})

const patientModel=new mongoose.model("patients",)
export default patientModel;