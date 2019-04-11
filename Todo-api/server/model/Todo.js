const mongoose = require('mongoose');

//create model with schema
var Todo = mongoose.model('Todo', {
    task: {
        type: String,
        require: true,
        trim: true,
        minlength: 1
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo};