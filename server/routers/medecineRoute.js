import express from "express";
import {
  register,
  login,
  updateSpeciality,
  updateUsername,
  updateCabinetName,
  getInfos,
} from "./../controllers/medecineController.js";
import { auth } from "../middlewares/auth.js";
const medecineRouter = express.Router();

medecineRouter
  .post("/register", register)
  .post("/login", login)
  .post("/update_speciality", auth, updateSpeciality)
  .post("/update_username", auth, updateUsername)
  .post("/update_cabinet", auth, updateCabinetName)
  .get("/getinfo",auth,getInfos)

export default medecineRouter;
