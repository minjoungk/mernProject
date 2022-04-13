const express = require("express");
//import express from "express";
//checking branch
//from "Kim" branch
//Need to work the below code out.
//import {register} from '../controllers/auth';

const router = express.Router();


router.post('/register', (req,res) => {
    console.log("REGISTER ENDPOINT => ", req.body);
});

module.exports = router;
