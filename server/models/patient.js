import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  pid:{
    type: String,
    required: [true, "username is required"],
  },
  prenom: {
    type: String,
    required: [true, "username is required"],
  },
  nom: {
    type: String,
    required: [true, "username is required"],
  },
  age: {
    type:Number,
    required: [true, "Age is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "email is required"],
  },
  medicenID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "medecines",
  },
});

const patientModel = new mongoose.model("patients",patientSchema);
export default patientModel;
