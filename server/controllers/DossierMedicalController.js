import {DossierMedical} from "./../models/DossierMedical.js";
import joi from "joi";


const craeteDossierMedical = async (req, res) => {
  const data = req.body;
  const validator = joi.object({
    allergies: joi.string().required(),
    pmc: joi.string().required(),
    fmh:joi.string().required(),
    consultation:joi.consultationObject().required(),
  });

  const Result = validator.validate(data);
  if (!Result.error) {
    const { allergies, pmc, fmh,consultation} = req.body;

    try {
      await DossierMedical.create({
        allergies: allergies,
        pmc: pmc,
        fmh: fmh,
        consultation:consultation,
      });

      res.json({
        message: "Medical folder created",
        status: "success",
      });

    } catch (error) {
      console.error(error);
      res.json({
        status: "error",
        message: "filed create medical folder",
      });
    }
  } else {
    res.status(400).json({
      status: "error",
      message: "data is not validate",
    });
  }
};


 