const mongoose = require('mongoose');

//User model
var User = mongoose.model('User', {
    name: {
        type: String,
        require: true,
        trim: true,
        minlength: 1
    },
    age: {
        type: Number,
        require: true,
        min: 0
    },
    email: {
        type: String,
        require: true,
        trim: true,
        minlength: 1
    },
    role: {
        type: String,
        enum: ['memeber', 'admin'],
        default: 'member'
    }
});

module.exports = {User};