import express from "express";
import {createDossierMedical} from "./../controllers/DossierMedicalController.js";
const DossierMedicalRouter = express.Router();

DossierMedicalRouter
  .post("/createDossier", createDossierMedical)

export default DossierMedicalRouter;
