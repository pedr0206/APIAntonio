const router = require ("express").Router();
const rovers = require ("../Models/rovers");
const { error } = require("console");

router.post("/", (req, res) =>{
    
    data = req.body;
    rovers.create(data)
    .then(data => { res.send(data)})
    .catch(error => {res.status(500).send( {message: error.message});})
});

router.get("/", (req, res,) =>{
    rovers.find()
    .then(data => { res.send(data)})
    .catch(error => {res.status(500).send( {message: error.message});})
});

module.exports = router;
