const express = require('express');
const cors = require('cors');
const method = require('method-override');
const app = express(); // create express server
const port = process.env.PORT || 5000;
const path = require('path');

require('dotenv').config();

// this will alow us to connect to mongodb database
const mongoose = require('./db/connection.js');

// midleware
app.use(cors());
app.use(express.json()); // allow us to parse json

const vehiclesRouter = require('./routes/vehicle-routes');
app.use('/vehicles', vehiclesRouter); // loads vehicles router

// listen router
app.listen(port, () => {
    console.log(`server is running on:${port}`);
})

