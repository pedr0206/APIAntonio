const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require ("body-Parser");
const app = express();
require("dotenv-flow").config();

const roversRoutes = require("./Routs/rovers")

app.use(bodyParser.json());

mongoose.connect(
    process.env.DBHOST,
    {

    }
).catch(error => console.log("Error connecting to mongoDB" + error));

mongoose.connection.once('open', () => console.log("connected to the DB")); 


app.get ("/api/welcome", (req, res) =>{
    res.status(200).send({message:"Wlecome to the api"}) 
});

app.use("/api/rovers", roversRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT,function(){
    console.log("Server is running on port" + PORT)
});


module.exports = app;