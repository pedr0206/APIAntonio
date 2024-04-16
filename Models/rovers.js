const mongoose = require ("mongoose");

const Schema = mongoose.Schema;
let roversSchema = new Schema(
    {
        model: {type: String}, 
        segment: {type: String},
        engineSeries: {type: String},
        trimLevel: {type: String},
        fuelType: {type: String} 
    }
)

module.exports = mongoose.model("rovers", roversSchema);