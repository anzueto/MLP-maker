const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/vehicles'

mongoose.connect(MONGODB_URI,
    {
        useNewUrlParser: true,
        useCreateIndex: true
    });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDb database connection established successfully');
})

mongoose.Promise = Promise;

module.exports = mongoose;

