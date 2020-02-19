const mongoose = require('../db/connection');


const VehicleSchema = new mongoose.Schema({
    year: { type: Number, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    template: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

const VehicleModel = mongoose.model('Vehicle', VehicleSchema);
module.exports = VehicleModel;
