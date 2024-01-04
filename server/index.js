import express from 'express'
import dotenv from 'dotenv'
import {connectDatabase} from './configs/db.config.js'
const app = express();
const port = 3000;
dotenv.config();
connectDatabase();

app.listen(port, () => console.log(`Example app listening on port ${port}!`))