
import mongoose from 'mongoose'

export const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("database connected...");
  } catch (err) {
    console.log(" there is an error connecting to db")
    console.error(err.message);
    process.exit(1);
  }
};

mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://nadjibdjellali9:nadjib09@cluster0.guxhgmy.mongodb.net/my_api?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
   
}).catch((error) => {
    console.log(error)
})
