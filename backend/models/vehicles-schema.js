const mongoose = require('../db/connection');


const VehicleSchema = new mongoose.Schema({
    year: { type: Number },
    make: { type: String },
    model: { type: String },
    template: { type: Number },
    createdAt: { type: Date, default: Date.now }
});

const VehicleModel = mongoose.model('Vehicle', VehicleSchema);
module.exports = VehicleModel;
