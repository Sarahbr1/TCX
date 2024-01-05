import mongoose  from "mongoose";

const consultationObject = new mongoose.Schema({
   
    diagnostique: {
         type: String, required: true
         },

     DateVisite: {
         type: String, required: true
         }, 

     symptoms: { 
        type: String, 
    },

     report: {
         type: [String]
        },

    });


const DossierMedicalSchema=new mongoose.Schema({

    //allergies
    allergies:{
        type:String,
        default:'no allergies'
    },

    // pervious medical condition
    pmc:{
        type:String,
    },

    //familly medical history
    fmh:{
        type:String,
    },

    //consultation
    consultation:{
        type:consultationObject,
        required: true,
    },

     
});

 

    const Dossier = mongoose.model('Dossier', DossierMedicalSchema);

     module.exports = Dossier;
