import joi from "joi";
import { v4 as uuidv4 } from "uuid";
import patientModel from "./../models/patient.js";

const createPatient = async (req, res) => {
  const data = req.body;
  const pid = uuidv4();
  const validator = joi.object({
    prenom: joi.string().required(),
    nom: joi.string().required(),
    phoneNumber: joi.string().required(),
    age: joi.number().required(),
  });
  const validationResult = validator.validate(data);
  if (!validationResult.error) {
    const medicenID = req.id;
    const { prenom, nom, phoneNumber, age } = data;
    try {
      await patientModel.create({
        pid: pid,
        prenom: prenom,
        nom: nom,
        age: age,
        phoneNumber: phoneNumber,
        medicenID: medicenID,
      });
      res.json({
        message: "patient has been created succesfully",
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

const updatePatientNom = async (req, res) => {
  const { pid } = req.params;
  const { newNom } = req.body;
  if (!newNom) {
    return res.status(400).json({ message: "nom is required", status: false });
  }
  const medicenID = req.id;
  try {
    await patientModel.findOneAndUpdate(
      { medicenID: medicenID, pid: pid },
      { nom: newNom }
    );
    return res.json({ message: "nom is updated", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error ", success: false });
  }
};

const updatePatientprenom = async (req, res) => {
  const { pid } = req.params;
  const { newPrenom } = req.body;
  if (!newPrenom) {
    return res
      .status(400)
      .json({ message: "Prenom is required", status: false });
  }
  const medicenID = req.id;
  try {
    await patientModel.findOneAndUpdate(
      { medicenID: medicenID, pid: pid },
      { prenom: newPrenom }
    );
    return res.json({ message: "nom is updated", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error ", success: false });
  }
};

const updatePatientAge = async (req, res) => {
  const { pid } = req.params;
  const { newAge } = req.body;
  if (!newAge) {
    return res.status(400).json({ message: "age is required", status: false });
  }
  const medicenID = req.id;
  try {
    await patientModel.findOneAndUpdate(
      { medicenID: medicenID, pid: pid },
      { age: newAge }
    );
    return res.json({ message: "nom is updated", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error ", success: false });
  }
};

const updatePhoneNumber = async (req, res) => {
  const { pid } = req.params;
  const { newPhoneNumber } = req.body;
  if (!newPhoneNumber) {
    return res
      .status(400)
      .json({ message: "phone number is required", status: false });
  }
  const medicenID = req.id;
  try {
    await patientModel.findOneAndUpdate(
      { medicenID: medicenID, pid: pid },
      { phoneNumber: newPhoneNumber }
    );
    return res.json({ message: "phone number is updated", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error ", success: false });
  }
};
const deletePatient = async (req, res) => {
  const { pid } = req.params;
  const medicenID = req.id;
  try {
    const result = await patientModel.deleteOne({
      pid: pid,
      medicenID: medicenID,
    });
    if (result.deletedCount === 1) {
      res
        .status(200)
        .json({
          message: "Patient deleted successfully",
          deletedCount: result.deletedCount,
        });
    } else {
      res.status(404).json({ message: "Patient not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error ", success: false });
  }
};

const getAllPatients = async (req, res) => {
  const medicenID = req.id;
  // const {age,lowerAge,greaterAge,le,ge,e,nom,prenom} = req.query;

  try {
    const allPatients = await patientModel.find({ medicenID: medicenID });
    if (!allPatients) {
      return res.json({
        message: "there is no patient",
        status: true,
        data: allPatients,
      });
    }
    res.json({ message: "all the patients", success: true, data: allPatients });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error ", success: false });
  }
};

const getFilteredPatients = async (req, res) => {
  const medicenID = req.id;
  const { age, lowerAge, greaterAge, le, ge, e, nom, prenom } = req.query;

  try {
    let query = { medicenID: medicenID };

    if (age) {
      query.age = parseInt(age);
    }

    if (lowerAge) {
      query.age = { ...query.age, $gte: parseInt(lowerAge) };
    }

    if (greaterAge) {
      query.age = { ...query.age, $lte: parseInt(greaterAge) };
    }

    if (le) {
      query.age = { ...query.age, $lte: parseInt(le) };
    }

    if (ge) {
      query.age = { ...query.age, $gte: parseInt(ge) };
    }

    if (e) {
      query.age = parseInt(e);
    }

    if (nom) {
      query.nom = nom;
    }

    if (prenom) {
      query.prenom = prenom;
    }

    const allPatients = await patientModel.find(query);

    if (!allPatients || allPatients.length === 0) {
      return res.json({
        message: "There are no patients matching the criteria",
        success: true,
        data: [],
      });
    }

    res.json({
      message: "Patients matching the criteria",
      success: true,
      data: allPatients,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};

export {
  createPatient,
  updatePatientNom,
  updatePatientprenom,
  updatePatientAge,
  updatePhoneNumber,
  deletePatient,
  getAllPatients,
  getFilteredPatients,
};
