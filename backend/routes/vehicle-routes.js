const router = require('express').Router() // requiring router
let Vehicle = require('../models/vehicles-schema');

//index route
router.route('/').get((req, res) => {
    Vehicle.find() // gets a list of all vehicles from database
        .then(vehicles => res.json(vehicles)) // return all vehicles in json format
        .catch(err => res.status(400).json('Error:' + err)); // if error let me know
});

// delete route
router.route('/:id').delete((req, res) => {
    Vehicle.findByIdAndDelete(req.params.id) //finding by id and delete from database
        .then(() => res.json('vehicle deleted')) // return delete confirmation
        .catch(err => res.status(400).json('Error:' + err)); // if errror send us a notification
});


module.exports = router;