//import express from "express";
const express = require("express");
const app = express();
//import mongoose from "mongoose";
const mongoose = require("mongoose");
//import cors from "cors";
const cors = require("cors");

//import morgan from "morgan";
const morgan = require('morgan');
require("dotenv").config();
//import 'dotenv/config'

const fs = require('fs');
//import {readdirSync} from 'fs'

//db

//mongoose.connect("mongodb+srv://minjoungk:<password>@merncamp.7baei.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
mongoose.connect(process.env.DATABASE);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});



//middlewares

app.use(express.json({ limit: "5mb"}));
app.use(express.urlencoded({extended: true }));
app.use(cors({
    origin: ["http://localhost:3000"]
}));


const autoRoutes = require("../server/users/routes");
app.use('/api', autoRoutes);


const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port port ${port}`));

