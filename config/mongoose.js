const mongoose = require('mongoose');
const config = require('config');
const debug = require('debug')("development:mongoose");

const db = async () => {
    try {
        await mongoose.connect(`${config.get("MONGODB_URI")}/scatch`);
        console.log('Connected to MongoDB');
    } catch (error) {
        debug('Error connecting to MongoDB:', error.message);
    }
};

module.exports = db;
