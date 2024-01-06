import medDocumentModel from "./../models/medDocument.js";
import { v4 as uuidv4 } from "uuid";
import joi from "joi";
import patientModel from "./../models/patient.js";

// medDocument/:pid .........
const createMedDocument = async (req, res) => {
  const data = req.body;
  const { pid } = req.params;
  const validator = joi.object({
    allergies: joi.string(),
    pmc: joi.string(),
    fmh: joi.string(),
  });
  const validationResult = validator.validate(data);
  if (!validationResult.error) {
    const { allergies, pmc, fmc } = data;
    const medicenID = req.id;
    const did = uuidv4();
    const patient = await patientModel.findOne({
      medicenID: medicenID,
      pid: pid,
    });
    const { _id } = patient;
    const patientID = _id;
    const medicalalDocumentExisting = await medDocumentModel.findOne({
      medicenID: medicenID,
      pid: pid,
    });
    if (medicalalDocumentExisting) {
      return res
        .status(400)
        .json({ message: "medical document already exist", success: false });
    }
    try {
      await medDocumentModel.create({
        did: did,
        allergies: allergies,
        pmc: pmc,
        fmc: fmc,
        consultations: [],
        patientID: patientID,
      });
      res.json({
        message: "document medical has been created succesfully",
        status: "success",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: "error",
        message: "Couldn't create the patient",
      });
    }
  } else {
    res.status(400).json({
      status: "error",
      message: "validation error",
    });
  }
};

const updateAllergies = async (req, res) => {
  const { newAllergies } = req.body;
  const { did } = req.params;
  if (!newAllergies) {
    newAllergies = "no allergies";
  }
  try {
    await medDocumentModel.findOneAndUpdate(
      { did: did },
      { allergies: newAllergies }
    );
    return res.json({ message: "allergies is updated", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error ", success: false });
  }
};
const updatePMC = async (req, res) => {
  const { newPMC } = req.body;
  const { did } = req.params;
  if (!newPMC) {
    newPMC = "no previos medical condition";
  }
  try {
    await medDocumentModel.findOneAndUpdate({ did: did }, { pmc: newPMC });
    return res.json({ message: "pmc is updated", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error ", success: false });
  }
};

const updateFMH = async (req, res) => {
  const { newFMH } = req.body;
  const { did } = req.params;
  if (!newFMH) {
    newFMH = "no familly medical history";
  }
  try {
    await medDocumentModel.findOneAndUpdate({ did: did }, { fmh: newFMH });
    return res.json({ message: "fmh is updated", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error ", success: false });
  }
};

const addConsultation = async (req, res) => {
  const data = req.body;
  const { did } = req.params;
  const validator = joi.object({
    diagnostique: joi.string().required(),
    DateVisite: joi.string().required(),
    symptoms: joi.string(),
    report: joi.array(),
  });
  const validationResult = validator.validate(data);
  if (!validationResult.error) {
    const { diagnostique, DateVisite, symptoms, report } = data;
    const cid = uuidv4();
    try {
      await medDocumentModel.findOneAndUpdate(
        { did: did },
        {
          $push: {
            consultations: {
              cid: cid,
              diagnostique: diagnostique,
              DateVisite: DateVisite,
              symptoms: symptoms,
              report: report,
            },
          },
        }
      );
      return res.json({
        message: "consultaion has been created",
        success: true,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "server error ", success: false });
    }
  } else {
    res.status(400).json({
      status: "error",
      message: "validation error",
    });
  }
};

const deleteConsultation = async (req, res) => {
  const { did, cid } = req.params;
  try {
    const result = await medDocumentModel.updateOne(
      { did: did },
      { $pull: { consultations: { cid: cid } } }
    );
    if (result.modifiedCount > 0) {
      res.send(
        `Deleted consultation with cid: ${cid} from medDocument with did: ${did}   result ${result}`
      );
    } else {
      res
        .status(404)
        .json({ message: " consultaion not found in this medical document" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const getMedDocument = async (req, res) => {
  const { pid } = req.params;
  const medID = req.id;
  const patientExisting = await patientModel.findOne({
    pid: pid,
    medicenID: medID,
  });
  if (!patientExisting) {
    return res
      .status(404)
      .json({ message: "patient doesnt exist", success: false });
  } else {
    try {
      const medicalDoc = await medDocumentModel.findOne({
        patientID: patientExisting._id,
      });
      if (medicalDoc) {
        res.json({ message: "document found", data: medicalDoc });
      } else {
        res
          .status(400)
          .json({ message: "document not found", data: medicalDoc });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
};
const updateDiagnostique = async (req, res) => {
  const { did, cid } = req.params;
  const { newDiagnostique } = req.body;
  if (!newDiagnostique) {
    res
      .status(400)
      .json({ message: "new diagnostique is required", success: false });
  }
  try {
    const result = await medDocumentModel.updateOne(
      { did: did, "consultations.cid": cid },
      { $set: { "consultations.$.diagnostique": newDiagnostique } }
    );
    if (result.modifiedCount > 0) {
      res.json({
        message: `Diagnostique updated for consultation with cid: ${cid} in medDocument with did: ${did}`,
        success: true,
      });
    } else {
      res
        .status(404)
        .json({
          message: `Consultation with cid: ${cid} not found in medDocument with did: ${did}`,
          success: result,
        });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};

const updateSymptoms = async (req, res) => {
  const { did, cid } = req.params;
  const { newsymptoms } = req.body;
  if (!newsymptoms) {
    res
      .status(400)
      .json({ message: "new symptoms is required", success: false });
  }
  try {
    const result = await medDocumentModel.updateOne(
      { did: did, "consultations.cid": cid },
      { $set: { "consultations.$.symptoms": newsymptoms } }
    );
    if (result.modifiedCount > 0) {
      res.json({
        message: `symptoms updated for consultation with cid: ${cid} in medDocument with did: ${did}`,
        success: true,
      });
    } else {
      res
        .status(404)
        .json({
          message: `Consultation with cid: ${cid} not found in medDocument with did: ${did}`,
          success: result,
        });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};

const updateReport = async (req, res) => {
    const { did,cid } = req.params;
    const { action, index, newReportText } = req.body;

    try {
        let updateQuery = {};

        if (action === "add" && newReportText) {
            // Add a new string to the report array
            updateQuery = { $push: { "consultations.$.report": newReportText } };
        } else if (action === "delete" && index !== undefined) {
            // Delete a string from the report array based on the index
            updateQuery = { $unset: { [`consultations.$.report.${index}`]: 1 } };
        } else {
            return res.status(400).json({ message: "Invalid request", success: false });
        }

        await medDocumentModel.findOneAndUpdate(
            { did: did,"consultations.cid":cid},
            updateQuery
        );
        res.json({ message: "Report updated successfully", success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", success: false });
    }
};

export {
  createMedDocument,
  updateAllergies,
  updatePMC,
  updateFMH,
  addConsultation,
  getMedDocument,
  deleteConsultation,
  updateDiagnostique,
  updateSymptoms,
  updateReport,
};
