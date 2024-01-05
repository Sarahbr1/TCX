import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import {connectDatabase} from './configs/db.config.js'
import {router as medecineRouter} from './routers/medecineRoute.js';
import pkg from 'express-openid-connect';
const { auth } = pkg;  
const app = express();
const port = 3000;
dotenv.config();
connectDatabase();

app.use(express.json());
app.use(morgan("dev"));
// authentification
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'https://locust-active-ladybird.ngrok-free.app',
  clientID: 'f1aGT1UAPid2HJjTQgypi27w238By77Y',
  issuerBaseURL: 'https://dev-u1kasffeizxxx3jo.us.auth0.com',
  routes: {
    login: '/medecine/login',
    logout: '/medecine/logout',
  },
};
app.use(auth(config));
app.use("/medecine",medecineRouter);
//------------------------------------------------------------

app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})


// app.post('/callback', function (req, res) {
//   console.log(req)
//   res.send('POST request to the homepage')
// });
app.listen(port, () => console.log(`Example app listening on port ${port}!`))