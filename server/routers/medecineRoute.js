import express from "express";
import {loginController,registerController} from './../controllers/medecineController.js'
const router=express.Router();
 
router.post("/login",loginController);
router.post("/register",registerController);

export  {router};