import mongoose from "mongoose";

const consultationsObject = new mongoose.Schema({
    cid:{
       type:String,
       required:true
    },
    diagnostique: {
        type: String,
        required: true
    },
    DateVisite: {
        type: String,
        required: true
    },
    symptoms: {
        type: String
    },
    report: {
        type: [String]
    },
});

const medDocumentSchema = new mongoose.Schema({
    did: {
        type: String,
        required: {
            value: true,
            message: "Document ID is required"
        }
    },
    allergies: {
        type: String,
        default: 'no allergies'
    },
    pmc: {
        type: String,
        default:"no previos medical condition"
    },
    fmh: {
        type: String,
        default:"no familly medical history"
    },
    consultations: [consultationsObject],  // Array of consultation objects
    patientID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "patients",
    },
});


const medDocumentModel = new mongoose.model("medDocuments", medDocumentSchema);

export default medDocumentModel;


