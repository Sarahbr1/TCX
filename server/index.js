import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import {connectDatabase} from './configs/db.config.js'
import medecineRouter from './routers/medecineRoute.js'
import patientRouter from './routers/patientRoute.js'
import medDocumentRouter from './routers/medDocumentRoute.js'
const app = express();
const port = 3000;
dotenv.config();
connectDatabase();

app.use(express.json());
app.use(morgan("dev"));


app.use("/medecine",medecineRouter);
app.use("/patient",patientRouter);
app.use("/med_document",medDocumentRouter);


app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))