import medecineModel from "./../models/medicine.js";
import bcrypt from 'bcrypt'
const loginController=async (req,res)=>{
    
}
const registerController=async (req,res)=>{
     const newMedecine=new medecineModel(req.body);
     await newMedecine.save();
     res.status(201).send({message:"has been added successfully",success:true});
}

export  {loginController,registerController};