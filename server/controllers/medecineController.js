import medecineModel from "./../models/medicine.js";

const loginController = async (req, res) => {
  res.status(200).send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
//   try {
//     if (req.oidc.isAuthenticated()) {
//       const authOUser = req.oidc.user;
//       console.log(authOUser.sub);
//       const existingMedecine = new medecineModel.findOne({
//           userID: authOUser.sub,
//       });

//       if (existingMedecine) {
//         // User already exists, you may perform additional actions if needed
//         console.log("Existing user logged in:", existingUser);
//       } else {
//         // User does not exist, create a new user in MongoDB
//         const newMedicine = new medecineModel({
//           userID: authOUser.sub,
//           username: String,
//           email: authOUser.email,
//           // Add other fields as needed based on your User model
//         });

//         // Save the new user to MongoDB
//         await newMedicine.save();

//         console.log("New user created and logged in:",newMedicine);
//       }

//       // Continue with your login response
//       res.send("Logged in");
//     }else{
//      res.send('Logged out');
//     }
//   } catch (error) {
//      console.error('Error in loginController:', error);
//      res.status(500).send('Internal Server Error');
//   }

}

const profileControler = async (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
};

export { loginController, profileControler };
