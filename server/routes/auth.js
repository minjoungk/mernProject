const express = require("express");
//import express from "express";

//import {register} from '../controllers/auth';

const router = express.Router();


router.post('/register', (req,res) => {
    console.log("REGISTER ENDPOINT => ", req.body);
});

module.exports = router;
