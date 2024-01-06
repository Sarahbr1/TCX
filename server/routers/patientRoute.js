import express from "express";
import {
  createPatient,
  deletePatient,
  getAllPatients,
  getFilteredPatients,
  updatePatientAge,
  updatePatientNom,
  updatePatientprenom,
  updatePhoneNumber,
} from "../controllers/patientController.js";
import { auth } from "../middlewares/auth.js";

const patientRouter = express.Router();
patientRouter
  .post("/create", auth, createPatient)
  .post("/update_nom/:pid", auth, updatePatientNom)
  .post("/update_prenom/:pid", auth, updatePatientprenom)
  .post("/update_age/:pid",auth,updatePatientAge)
  .post("/update_phoneNumber/:pid", auth, updatePhoneNumber)
  .delete("/delete/:pid", auth, deletePatient)
  .get("/getAll", auth, getAllPatients)
  .get("/getAll2",auth,getFilteredPatients);
export default patientRouter;
