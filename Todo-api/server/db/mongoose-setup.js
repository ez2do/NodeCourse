const mongoose = require('mongoose');

//setting up
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoMongoose');

module.exports = {mongoose};