const express = require('express');
const cors = require('cors');
const app = express();
// this will alow us to connect to mongodb database
const mongoose = require('mongoose');
const db = mongoose.connection;

// Environment Variables
require('dotenv').config();
// creating express server
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
    () => console.log('MongoDB connection established:', mongoURI));

// Error / Disconnection
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('disconnected', () => console.log('mongo disconnected'));

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }))// extended: false - does not allow nested objects in query strings
app.use(express.json())// returns middleware that only parses JSON
app.use(express.static('public'));

// Routes
const vehiclesController = require('./controllers/vehicles.js');
app.use('/vehicles', vehiclesController);

// this will catch any route that doesn't exist
app.get('*', (req, res) => {
    res.status(404).json('Sorry, page not found');
})

// starting server on port
app.listen(port, () => {
    console.log(`server is running on:${port}`);
})