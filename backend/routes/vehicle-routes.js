const router = require('express').Router() // requiring router
let Vehicle = require('../models/vehicles-schema');

//index route
router.route('/').get((req, res) => {
    Vehicle.find() // gets a list of all vehicles from database
        .then(vehicles => res.json(vehicles)) // return all vehicles in json format
        .catch(err => res.status(400).json('Error:' + err)); // if error let me know
});