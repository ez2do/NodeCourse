const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose-setup');
const {Todo} = require('./../server/model/Todo');

//remove all
//Todo.remove({});

Todo.findOneAndRemove();
Todo.findByIdAndRemove(id).then((result) => {

}).catch((err) => {

});