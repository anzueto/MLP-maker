const express = require('express');
const method = require('method-override');
const app = express();
const port = process.env.PORT || 3000;

// this will alow us to connect to mongodb database
const mongoose = require('./db/connection.js');

// middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: true }));
app.use(method('_method'));
app.use(express.static('public'));


const Vehicles = require('./models/vehicles-schema');
const vehiclesController = require('./controllers/vehicles.js');

// gets the info to the home page
app.get('/', (req, res) => {
    Vehicles.find({})
        .then(vehicles => {
            res.render('Index', { vehicles });
        });
});


app.use('/vehicles', vehiclesController);

mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

// listen router
app.listen(port, () => {
    console.log(`server is running on:${port}`);
})

