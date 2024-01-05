import medecineModel from "./../models/medicine.js";
import Specialities from "../configs/specialiteEnum.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import joi from "joi";

const register = async (req, res) => {
  const data = req.body;
  const validator = joi.object({
    username: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    speciality:joi.string().required(),
    cabinet:joi.string().required(),
  });
  const validationResult = validator.validate(data);
  if (!validationResult.error) {
    const { username, password, email,speciality,cabinet } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashPassowrd = await bcrypt.hash(password, salt);
    try {
      await medecineModel.create({
        username: username,
        password: hashPassowrd,
        email: email,
        speciality:speciality,
        cabinet:cabinet,
      });
      res.json({
        message: "medecin has been created succesfully",
        status: "success",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: "error",
        message: "Couldn't create the medecin",
      });
    }
  } else {
    res.status(400).json({
      status: "error",
      message: "validation error",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await medecineModel.findOne({ email: email });
  if (!user) {
    res.status(400).json({ message: "email doesnt exist", success: false });
  } else {
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).send({ auth: false, message: "Invalid" });
    }
    // Return token
    const token=jwt.sign({
      id: user._id,
    }, 'secret', {
      expiresIn: '1h',
    });
    res.json({token:token,success:true});
  }
};

const updateSpeciality=async (req,res)=>{
  const {speciality}=req.body;
  // Check if speciality is in enums
  if (!Object.values(Specialities).includes(speciality)) {
     return res.json({message:"specialty invalid",success:false});
  }
  const medId = req.id
  try {
    await medecineModel.findOneAndUpdate({
      _id: medId
    }, {
      speciality: speciality
    })
    return res.json({message:"speciality is updated",success:true})
  } catch (error) {
     console.log(error)
     return res.status(500).json(
      {message:"server error ",success:false}
     )
  } 
  
}

const updateUsername=async (req,res)=>{
   const {newUsername}=req.body;
   const medId=req.id;
   if(!newUsername){
    return res.status(400).json({message:"username is required",status:false})
   }
   try {
    await medecineModel.findOneAndUpdate({
      _id: medId
    }, {
      username: newUsername
    })
    return res.json({message:"username is updated",success:true})
  } catch (error) {
     console.log(error)
     return res.status(500).json(
      {message:"server error ",success:false}
     )
  } 

}
const updateCabinetName=async (req,res)=>{
  const {cabinetName}=req.body;
  const medId=req.id;
  if(!cabinetName){
   return res.status(400).json({message:"cabinet name is required",status:false})
  }
  try {
   await medecineModel.findOneAndUpdate({
     _id: medId
   }, {
     cabinet: cabinetName
   })
   return res.json({message:"cabinet name is updated",success:true})
 } catch (error) {
    console.log(error)
    return res.status(500).json(
     {message:"server error ",success:false}
    )
 } 

}

export { register,login,updateSpeciality,updateUsername,updateCabinetName };
