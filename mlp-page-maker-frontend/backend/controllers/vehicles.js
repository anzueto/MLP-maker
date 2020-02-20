const express = require('express');
const router = express.Router();

const Vehicle = require('../models/vehicles-schema.js');

// index route
router.get('/', (req, res) => {
    Vehicle.find({}).then(vehicles => {
        res.render('vehicles/Index', { vehicles });
    });
});

//Show Route
router.get('/:id', (req, res) => {
    Vehicle.findOne({ _id: req.params.id }).then(vehicles => {
        res.render('vehicles/Show', vehicles);
    });
});

// Create Route
router.post('/', (req, res) => {
    console.log(req.body);
    Vehicle.create(req.body).then(() => {
        res.redirect('/');
    });
});

//edit Route
router.get('/edit/:id', (req, res) => {
    Vehicle.findOne({ _id: req.param.id }).then(vehicles => {
        res.render('vehicles/Edit', vehicles);
    });
});

// update Route
router.put('/:id', (req, res) => {
    Vehicle.findByIdAndUpdate({ _id: req.params.id },
        req.body).then(vehicles => {
            res.redirect(`/vehicles/${vehicles.id}`);
        });
});


module.exports = router;