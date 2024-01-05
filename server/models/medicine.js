import mongoose  from "mongoose";
import validator from "validator"
 import Specialities from "../configs/specialiteEnum.js";


const medecineSchema=new mongoose.Schema({
    username:String,
    password:String,
    // username:{
    //     type:String,
    //     required:[true,"username is required"]
    // },
    // password:{
    //     type:String,
    //     required:[true,"password is required"]
    // },
    // email:{
    //     type:String,
    //     required:[true,"email is required"],
    //     validate:{
    //         validator:validator.isEmail,
    //         message:"invalid email address"
    //     }
    // },
    // speciality:{
    //     type:String,
    //     enum:Object.values(Specialities),
    //     default:Specialities.generalist,
    // },
    // cabinet:{
    //     type:String,
    //     required:[true,"this field is required"]
    // },
    // patrients array
    // patients:[
    //     {
    //         type:mongoose.Schema.Types.ObjectId,
    //         ref:"Patient",
    //     }
    // ]
});

const medecineModel=mongoose.model("medecines",medecineSchema); 
export default medecineModel;