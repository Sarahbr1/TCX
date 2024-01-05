import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import {connectDatabase} from './configs/db.config.js'
import {router as medecineRouter} from './routers/medecineRoute.js';

  
const app = express();
const port = 3000;
dotenv.config();
connectDatabase();

app.use(express.json());
app.use(morgan("dev"));
// app.use("/api/v1/medecine",medecineRouter);


// authentification using auth02

// import { auth,requiresAuth } from "express-openid-connect";
import pkg from 'express-openid-connect';
const { auth,requiresAuth } = pkg;
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:3000',
    clientID: 'f1aGT1UAPid2HJjTQgypi27w238By77Y',
    issuerBaseURL: 'https://dev-u1kasffeizxxx3jo.us.auth0.com'
  };

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  });

 app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))