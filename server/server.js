const express = require("express");
const app = express();

const cors = require("cors");
const morgan = require('morgan');
require("dotenv").config();


//Connect to MongoDB
const mongoose = require('mongoose');
var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 500
};
mongoose.connect('mongodb+srv://minjoungk:dilemma12@merncamp.7baei.mongodb.net/myFirstDatabase?retryWrites=true&w=majority  ',
    options, (err, res) => {
        if (err) {
            console.log(err)
            console.log("MongoDB connection failed")
        }
        else {
            console.log('MongoDB connected')
        }
    })

//middlewares
app.use(express.json({ limit: "5mb"}));
app.use(express.urlencoded({extended: true }));
app.use(cors({
    origin: ["http://localhost:3000"]
}));

//autoload routes
//fs.readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));



//Set up Routes
app.use('/api', require('./routes/auth'));



//connect to PORT
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port port ${port}`));

