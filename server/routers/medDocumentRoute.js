import express from "express";
import {
    addConsultation,
  createMedDocument,
  deleteConsultation,
  getMedDocument,
  updateAllergies,
  updateDiagnostique,
  updateFMH,
  updatePMC,
  updateReport,
  updateSymptoms,
} from "../controllers/medDocumentController.js";
import { auth } from "./../middlewares/auth.js";
const medDocumentRouter = express.Router();

medDocumentRouter
  .post("/create/:pid", auth, createMedDocument)
  .get("/get_medical_doc/:pid",auth,getMedDocument)
  .post("/update/allergies/:did", auth, updateAllergies)
  .post("/update/pmc/:did", auth, updatePMC)
  .post("/update/fmh/:did", auth, updateFMH)
  .post("/update/consultaions/add/:did",auth,addConsultation)
  .delete("/update/consultaions/delete/:did/:cid",auth,deleteConsultation)
  .post("/update/consultaions/update/diagnostique/:did/:cid",auth,updateDiagnostique)
  .post("/update/consultaions/update/symptoms/:did/:cid",auth,updateSymptoms)
  .post("/update/consultaions/update/report/:did/:cid",auth,updateReport)  //     const { action, index, newReportText } = req.body;
   
export default medDocumentRouter;
