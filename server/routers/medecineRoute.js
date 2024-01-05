import express from "express";
import {loginController,profileControler} from './../controllers/medecineController.js'
import pkg from 'express-openid-connect';
const {requiresAuth } = pkg;
const router=express.Router();
router.get("/login",loginController);
router.get("/profile",requiresAuth(),profileControler);

export  {router};